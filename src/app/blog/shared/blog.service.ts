import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BlogModel } from './blog.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  private extractListData(res: Response) {
    const body = res.json();
    return body._embedded.blogposts || {};
  }

  private extractSingleData(res: Response) {
    const body = res.json();
    return body || {};
  }

  public getBlogPosts(): Observable<BlogModel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.blogPostQueryBaseUrl, options)
      .map(this.extractListData);
  }

  public getBlogPost(id: string): Observable<BlogModel> {
    const url = `${environment.blogPostQueryBaseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractSingleData);
  }

  public addBlogPost(post: BlogModel): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(environment.blogPostCommandBaseUrl, post, options);
  }
}
