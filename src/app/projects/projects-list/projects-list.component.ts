import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';
import { ProjectModel } from '../shared/project.model';
import { EventManager } from '../../shared/event-manager.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  dataSource: ProjectsDataSource;
  displayedColumns = ['id', 'name', 'repoUrl', 'siteUrl', 'description', 'category'];

  constructor(private projectsService: ProjectsService, private eventManager: EventManager) {
    this.dataSource = new ProjectsDataSource(projectsService);
   }

  ngOnInit(): void {
    this.registerChange();
  }

  private registerChange() {
    this.eventManager.subscribe('projectListModification', (response) => this.getProjects());
  }

  private getProjects(): void {
    this.dataSource.disconnect();
    this.dataSource = new ProjectsDataSource(this.projectsService);
  }

}

export class ProjectsDataSource extends DataSource<any> {

  projects: ProjectModel[];

  constructor(private projectsService: ProjectsService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectModel[]> {
    return this.projectsService.getProjects();
  }

  disconnect() { }
}
