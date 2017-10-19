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
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  dataSource: BlogDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private blogService: BlogService, private eventManager: EventManager) {
  }

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new BlogDataSource(this.blogService, this.pageChange, this.eventManager);
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }

}

/** ###################### Data source ########################## **/
export class BlogDataSource extends DataSource<BlogModel> {
  page: PageModel;

  constructor(private blogService: BlogService, private pageChange: Subject<PageEvent>, private eventManager: EventManager) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<BlogModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter((event) => event.name === 'blogPostListModification')
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 20;

    /** Merging 'blogPostListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap((event) => {
        /** Check the type of an event in the stream.
            In case of 'blogPostListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.blogService.getBlogPostsByParams(event.pageIndex + '', event.pageSize + '');
        } else {
          return this.blogService.getBlogPostsByParams(startPageEvent.pageIndex + '', startPageEvent.pageSize + '');
        }
      })
      .map(data => {
        this.page = data.page;

        return data.blogposts;
      })
      .catch((error) => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {
  }
}

