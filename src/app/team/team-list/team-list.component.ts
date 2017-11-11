import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PageEvent } from '@angular/material';
import { TeamsService } from '../shared/team.service';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { TeamModel } from '../shared/team.model';
import { PageModel } from '../../shared/page.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  dataSource: TeamsDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private teamsService: TeamsService, private eventManager: EventManager) {
  }

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new TeamsDataSource(this.teamsService, this.pageChange, this.eventManager);
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }

}

/** ###################### Data source ########################## **/
export class TeamsDataSource extends DataSource<TeamModel> {
  page: PageModel;

  constructor(private teamsService: TeamsService, private pageChange: Subject<PageEvent>, private eventManager: EventManager) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<TeamModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter((event) => event.name === 'teamListModification')
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'teamListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap((event) => {
        /** Check the type of an event in the stream.
            In case of 'teamListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.teamsService.getTeamsByParams(event.pageIndex + '', event.pageSize + '');
        } else {
          return this.teamsService.getTeamsByParams(startPageEvent.pageIndex + '', startPageEvent.pageSize + '');
        }
      })
      .map(data => {
        this.page = data.page;

        return data.teams;
      })
      .catch((error) => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {
  }

}
