import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Subject } from 'rxjs/Subject';
import { EventManager } from '../../shared/event-manager.service';
import { PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { UserModel } from '../shared/user.model';
import { PageModel } from '../../shared/page.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  dataSource: UsersDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private usersService: UsersService, private eventManager: EventManager) {
  }

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new UsersDataSource(this.usersService, this.pageChange, this.eventManager);
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }

}

/** ###################### Data source ########################## **/
export class UsersDataSource extends DataSource<UserModel> {
  page: PageModel;

  constructor(private usersService: UsersService, private pageChange: Subject<PageEvent>, private eventManager: EventManager) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter((event) => event.name === 'userListModification')
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'userListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap((event) => {
        /** Check the type of an event in the stream.
            In case of 'userListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.usersService.getUsersByParams(event.pageIndex + '', event.pageSize + '');
        } else {
          return this.usersService.getUsersByParams(startPageEvent.pageIndex + '', startPageEvent.pageSize + '');
        }
      })
      .map(data => {
        this.page = data.page;

        return data.users;
      })
      .catch((error) => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {
  }
}

