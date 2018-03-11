import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';
import { ProjectModel } from '../shared/project.model';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material';
import { PageModel } from '../../shared/page.model';
import { Subject } from 'rxjs/Subject';

/** ###################### Data source ########################## **/
export class ProjectsDataSource extends DataSource<ProjectModel> {
  page: PageModel;

  constructor(private projectsService: ProjectsService, private pageChange: Subject<PageEvent>, private eventManager: EventManager) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter((event) => event.name === 'projectListModification')
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'projectListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap((event) => {
        /** Check the type of an event in the stream.
         In case of 'projectListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.projectsService.getProjectsByParams(event.pageIndex + '', event.pageSize + '');
        } else {
          return this.projectsService.getProjectsByParams(startPageEvent.pageIndex + '', startPageEvent.pageSize + '');
        }
      })
      .map(data => {
        this.page = data.page;

        return data.projects;
      })
      .catch((error) => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {
  }
}

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  dataSource: ProjectsDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private projectsService: ProjectsService, private eventManager: EventManager) {
  }

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new ProjectsDataSource(this.projectsService, this.pageChange, this.eventManager);
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }

}
