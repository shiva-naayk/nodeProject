import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllPost()
  {
  	 return this.http.get('/routes/posts')
  	 .toPromise()
  	 .then((res )=>{
  	 	return res;
  	 })
  }

  getFullData()
  {
    return this.http.get('/routes/getData')
    .toPromise()
    .then((res)=>{
      return res;
    })
  }
}
