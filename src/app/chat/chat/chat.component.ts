import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  userAddForm: FormGroup;
  user: string;
  room: string;
  textMessage: string;
  messageArray:Array<{user:string, message: string}> =[];
  constructor(private formBuilder:FormBuilder,private chatService:ChatService ) { 

    this.chatService.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));

    this.chatService.userLeftRoom()
    .subscribe(data => this.messageArray.push(data));

    this.chatService.newMessageReceived()
    .subscribe(data=> this.messageArray.push(data));

    this.buildForm(); 

  }

  ngOnInit() {

  }

  buildForm(): void {
   this.userAddForm = this.formBuilder.group({
     chat: ['', Validators.required],  
     username: ['', Validators.required],  
     roomdata: ['', Validators.required],  
   });
 }
  
  join(){
    var data = this.userAddForm.value;
      this.chatService.joinRoom({user:this.user=data.username,room:this.room=data.roomdata});
  }

  leave()
  {
     var data = this.userAddForm.value;
     this.chatService.leaveRoom({user:this.user=data.username,room:this.room=data.roomdata});
  }

  sendMessage()
  {
    var data = this.userAddForm.value;
     this.chatService.sendMessage({user:this.user=data.username,room:this.room=data.roomdata, message:this.textMessage=data.chat});
  }
}
