import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule} from '@angular/router';
import { PostsService } from './posts.service';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';


const Routes = [


  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
	
	{ path: 'posts',component: PostsComponent },
  { 
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'chat',
    component: ChatComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ContactComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
       HttpClientModule,
  ],
  providers: [PostsService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
