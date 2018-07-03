import {Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private postsService:PostsService) { }

  ngOnInit() {

  		this.postsService.getFullData()
  		.then(posts=>{
  			this.posts = posts;
  		})
  }

}
