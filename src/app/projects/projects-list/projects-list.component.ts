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


  constructor(private projectsService: ProjectsService, private eventManager: EventManager) {
    this.dataSource = new ProjectsDataSource(this.projectsService, null);
  }

  ngOnInit(): void {
    this.registerChange();
  }

  private registerChange() {
    this.eventManager.subscribe('projectListModification', (response) => {
      this.dataSource.disconnect();
      this.dataSource = new ProjectsDataSource(this.projectsService, null);
    });
  }

  pageChanged(pageEvent: PageEvent) {
    this.dataSource.disconnect();
    this.dataSource = new ProjectsDataSource(this.projectsService, pageEvent);
  }


}

export class ProjectsDataSource extends DataSource<ProjectModel> {
  subject: BehaviorSubject<ProjectModel[]>;
  page: PageModel;

  constructor(private projectsService: ProjectsService, private pageEvent: PageEvent) {
    super();
  }

  // private getData() {
  //   this.subject = new BehaviorSubject<ProjectModel[]>([]);
  //   this.projectsService.getProjects()
  //     .do((dto: ProjectsModel) => this.subject.next(dto.projects))
  //     .subscribe((dto: ProjectsModel) => this.page = dto.page);

  // }

  private getData(page: string, size: string) {
    this.subject = new BehaviorSubject<ProjectModel[]>([]);
    console.log('##########' + page);
    console.log('##########' + size);
    this.projectsService.getProjectsByParams(page, size)
      .do((dto: ProjectsModel) => this.subject.next(dto.projects))
      .subscribe((dto: ProjectsModel) => this.page = dto.page);

  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectModel[]> {
    if (this.pageEvent !== null && this.pageEvent.pageIndex !== null && this.pageEvent.pageSize !== null) {
      this.getData(this.pageEvent.pageIndex + '', this.pageEvent.pageSize + '');
    } else {
      this.getData(null, null);
    }

    return Observable.merge(this.subject);
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }
}
