const express = require('express');
const path = require('path');
var app= express();
var http = require('http');
//const routes = require('./server/routes/routes');
 app.use(express.static(path.join(__dirname,'/dist')));
// app.use('/routes',routes);
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'/dist/index.html'));
})
// app.set('dist', path.join(__dirname, 'dist'));
// app.set('view engine', 'html');

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
const port = process.env.PORT || 3000; 

// join room
io.on('connection',(socket)=>{
	console.log('new connection made');
	socket.on('join',function(data){

		socket.join(data.room);
		console.log(data.user + 'joined the room' + data.room);
		socket.broadcast.to(data.room).emit('new user joined',{user: data.user, message: 'has joined this room'})
	});
// left room
	socket.on('leave',function(data){

		
		console.log(data.user + 'left the room' + data.room);
		socket.broadcast.to(data.room).emit('left room',{user: data.user, message: 'has left this room'})

		socket.leave(data.room);
	});

	socket.on('message', function(data){
		io.in(data.room).emit('new message', {user:data.user, message:data.message});
	});

});
server.listen(port,(req, res)=>{

	console.log(`Running on port ${port}`);
})