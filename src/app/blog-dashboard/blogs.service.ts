import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IBlogPost } from './models/blogPost';

@Injectable()
export class BlogsService {

  constructor(
    private http: HttpClient
  ) { }

  private apiEndpoint = 'https://jsonplaceholder.typicode.com/';

  getPosts(): Observable<IBlogPost[]> {
    return this.http
      .get<IBlogPost[]>(this.apiEndpoint + 'posts');
  }

  getPost(id: number) {
    return this.http
      .get<IBlogPost>(`${this.apiEndpoint}posts/${id}`);
  }

}
