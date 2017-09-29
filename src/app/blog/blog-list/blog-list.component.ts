import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { BlogModel } from '../shared/blog.model';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PageModel } from '../../shared/page.model';
import { PageEvent } from '@angular/material';
import { BlogsModel } from '../shared/blogs.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  dataSource: BlogDataSource;

  constructor(private blogService: BlogService, private eventManager: EventManager) {
    this.dataSource = new BlogDataSource(this.blogService, null);
  }

  ngOnInit(): void {
    this.registerChange();
  }

  private registerChange() {
    this.eventManager.subscribe('blogPostListModification', (response) => {

      this.dataSource.disconnect();

      const pageEvent: PageEvent = new PageEvent();
      pageEvent.length = this.dataSource.page.totalElements + 1;
      pageEvent.pageSize = this.dataSource.page.size;
      if (pageEvent.length % pageEvent.pageSize === 1) {
        pageEvent.pageIndex = this.dataSource.page.totalPages;
      } else {
      pageEvent.pageIndex = this.dataSource.page.totalPages - 1;
      }

      this.dataSource = new BlogDataSource(this.blogService, pageEvent);


    });
  }

  pageChanged(pageEvent: PageEvent) {
    this.dataSource.disconnect();
    this.dataSource = new BlogDataSource(this.blogService, pageEvent);
  }
}

export class BlogDataSource extends DataSource<BlogModel> {
  subject: BehaviorSubject<BlogModel[]>;
  page: PageModel;

  constructor(private blogService: BlogService, private pageEvent: PageEvent) {
    super();
  }

  private getData(page: string, size: string) {
    this.subject = new BehaviorSubject<BlogModel[]>([]);
    this.blogService.getBlogPostsByParams(page, size)
      .do((dto: BlogsModel) => this.subject.next(dto.blogposts))
      .subscribe((dto: BlogsModel) => this.page = dto.page);

  }

  connect(): Observable<BlogModel[]> {
    if (this.pageEvent !== null) {
      this.getData(this.pageEvent.pageIndex + '', this.pageEvent.pageSize + '');
    } else {
      this.getData('0', '5');
    }

    return Observable.merge(this.subject);
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }
}

