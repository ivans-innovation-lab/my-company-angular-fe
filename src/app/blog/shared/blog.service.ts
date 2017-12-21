import { Injectable } from '@angular/core';
import {post} from 'selenium-webdriver/http';
import { environment } from '../../environment';
import { Response } from '@angular/http';
import { BlogModel } from './blog.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { BlogsModel } from './blogs.model';


@Injectable()
export class BlogService {

  blogs: BlogsModel;

  constructor(private http: AuthHttp) { }

  private extractListData(res: Response) {
    const body = res.json();
    this.blogs = new BlogsModel();
    this.blogs.page = body.page;
    this.blogs.blogposts = body._embedded.blogposts || {};
    return this.blogs;
  }

  private extractSingleData(res: Response) {
    const body = res.json();
    return body || {};
  }

  public getBlogPosts(): Observable<BlogsModel> {
    return this.http.get(environment.blogPostQueryBaseUrl)
      .map(this.extractListData);
  }

  public getBlogPostsByParams(page: string, size: string): Observable<BlogsModel> {

    return this.http.get(environment.blogPostQueryBaseUrl + '?page=' + page + '&size=' + size)
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

  public publishBlogPost(id: string, publishAt: Date): Observable<any> {
    const blog: BlogModel = new BlogModel();
    blog.publishAt = publishAt;
    const url = `${environment.blogPostCommandBaseUrl}/${id}/publishcommand`;
    return this.http.post(url, blog);
  }

  public unPublishBlogPost(id: string): Observable<any> {
    const url = `${environment.blogPostCommandBaseUrl}/${id}/unpublishcommand`;
    return this.http.post(url, null);
  }
}
