const express = require('express');
const router = express.Router();
var mysql = require('mysql');
const axios = require('axios');

var dbconfig= {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cemetery',
};

var connection= mysql.createConnection(dbconfig);



router.get('/getData',(req, res)=>{
connection.connect(function(err){
	
		connection.query('SELECT * FROM cm_owner',function(err, data){

			if(!err)
			{

				  res.send( data );
			}else
			{
				 res.send({ err }) 
			}
		});	
   });

});

const PostAPI = 'https://jsonplaceholder.typicode.com';

router.get('/', (req,res)=>{

})
router.get('/posts',(req, res)=>{
	axios.get(`${PostAPI}/posts`).then(posts =>{
		res.status(200).json(posts.data);
	})
	.catch(error =>{
		res.status(500).send(error);
	})
});

module.exports = router;
