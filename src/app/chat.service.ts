import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';


@Injectable()

export class ChatService{

	private socket= io('https://demonode12.herokuapp.com:3000');  //http://demo.aminfocraft.com

	joinRoom(data)
	{
		 this.socket.emit('join',data);
	}	

	newUserJoined()
	{

		let observable = new Observable<{user:string, message:string}>(observable=>{

			this.socket.on('new user joined',(data)=>{
				observable.next(data);
			})
			return ()=> {this.socket.disconnect();}
		});
		return observable;
	}

	leaveRoom(data)
	{
		this.socket.emit('leave',data);
	}

	userLeftRoom()
	{
		let observable = new Observable<{user:string, message:string}>(observable=>{

			this.socket.on('left room',(data)=>{
				observable.next(data);
			})
			return ()=> {this.socket.disconnect();}
		});
		return observable;
	}
	sendMessage(data)
	{
		this.socket.emit('message',data);
	}

	newMessageReceived()
	{
		let observable = new Observable<{user:string, message:string}>(observable=>{

			this.socket.on('new message',(data)=>{
				observable.next(data);
			})
			return ()=> {this.socket.disconnect();}
		});
		return observable;
	}
}