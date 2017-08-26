import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Response } from '@angular/http';
import { BlogModel } from './blog.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class BlogService {

  constructor(private http: AuthHttp) { }

  private extractListData(res: Response) {
    const body = res.json();
    return body._embedded.blogposts || {};
  }

  private extractSingleData(res: Response) {
    const body = res.json();
    return body || {};
  }

  public getBlogPosts(): Observable<BlogModel[]> {
    return this.http.get(environment.blogPostQueryBaseUrl)
      .map(this.extractListData);
  }

  public getBlogPost(id: string): Observable<BlogModel> {
    const url = `${environment.blogPostQueryBaseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractSingleData);
  }

  public addBlogPost(post: BlogModel): Observable<any> {
    return this.http.post(environment.blogPostCommandBaseUrl, post);
  }
}
