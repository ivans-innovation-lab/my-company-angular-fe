import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { BlogModel } from '../shared/blog.model';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  dataSource: BlogDataSource;
  
  constructor(private blogService: BlogService, private eventManager: EventManager) {
    this.dataSource = new BlogDataSource(blogService);
  }

  ngOnInit(): void {
    this.registerChange();
  }

  private registerChange() {
    this.eventManager.subscribe('blogPostListModification', (response) => this.getBlogPosts());
  }

  private getBlogPosts(): void {
    this.dataSource.disconnect();
    this.dataSource = new BlogDataSource(this.blogService);
  }
}

export class BlogDataSource extends DataSource<any> {

  constructor(private blogService: BlogService) {
    super();
  }

  connect(): Observable<BlogModel[]> {
    return this.blogService.getBlogPosts();
  }

  disconnect() { }
}
