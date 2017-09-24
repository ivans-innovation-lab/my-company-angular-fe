import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';
import { ProjectModel } from '../shared/project.model';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material';
import { ProjectsModel } from '../shared/projects.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PageModel } from '../../shared/page.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  dataSource: ProjectsDataSource;
  pageEvent: PageEvent;

  constructor(private projectsService: ProjectsService, private eventManager: EventManager) {
    this.dataSource = new ProjectsDataSource(this.projectsService);
  }

  ngOnInit(): void {
    this.registerChange();
  }

  private registerChange() {
    this.eventManager.subscribe('projectListModification', (response) => {
      this.dataSource.disconnect();
      this.dataSource = new ProjectsDataSource(this.projectsService);
    });
  }


}

export class ProjectsDataSource extends DataSource<ProjectModel> {
  subject: BehaviorSubject<ProjectModel[]>;
  page: PageModel;

  constructor(private projectsService: ProjectsService) {
    super();
  }

  private getData() {
    this.subject = new BehaviorSubject<ProjectModel[]>([]);
    this.projectsService.getProjects()
      .do((dto: ProjectsModel) => this.subject.next(dto.projects))
      .subscribe((dto: ProjectsModel) => this.page = dto.page);

  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectModel[]> {
    this.getData();
    return Observable.merge(this.subject);
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }
}
