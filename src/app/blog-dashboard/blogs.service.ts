import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';

import { IBlogPostViewModel } from './models/blogPostViewModel';
import { IAuthor } from './models/author';
import { IBlogPost } from './models/blogPost';

@Injectable()
export class BlogsService {

  constructor(
    private http: HttpClient,
  ) { }

  private _apiEndpoint = 'https://jsonplaceholder.typicode.com/';

  private _cachedAuthors: IAuthor[];

  async delete(postId: number) {
    await this.http.delete(this._apiEndpoint + `posts/${postId}`);
  }

  getAuthors(): Observable<IAuthor[]> {
    if (this._cachedAuthors) {
      return Observable.from([this._cachedAuthors]);
    } else {
      return this.http
      .get<IAuthor[]>(this._apiEndpoint + 'users')
      .do(authors => {
        this._cachedAuthors = authors;
      });
    }
  }

  getPosts(): Observable<IBlogPostViewModel[]> {
    return this.getAuthors()
      .mergeMap(authors => {
        const blogposts = this.retrievePosts();
        const authorIndices = authors.map(a => a.id);
        return blogposts.map(posts => {
          return posts.map(bp => {
            const authorIdx = authorIndices.indexOf(bp.userId);
            return {
              author: authors[authorIdx],
              id: bp.id,
              title: bp.title,
              body: bp.body
            };
          });
        });
      });
  }

  getPost(id: number) {
    return this.getAuthors()
      .mergeMap(authors => {
        return this.retrievePost(id)
          .map(bp => {
            const authorIndices = authors.map(a => a.id);
            const authorIdx = authorIndices.indexOf(bp.userId);
                return {
                  author: authors[authorIdx],
                  id: bp.id,
                  title: bp.title,
                  body: bp.body
                };
          });
      });
  }

  private retrievePosts(): Observable<IBlogPost[]> {
    return this.http
      .get<IBlogPost[]>(this._apiEndpoint + 'posts');
  }

  private retrievePost(id: number) {
    return this.http
      .get<IBlogPost>(`${this._apiEndpoint}posts/${id}`);
  }
}
