import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environment';
import {ProjectModel} from './project.model';
import {ProjectsModel} from './projects.model';

@Injectable()
export class ProjectsService {
  projects: ProjectsModel;

  constructor(private http: AuthHttp) {
  }

  private extractListData(res: Response) {
    const body = res.json();
    this.projects = new ProjectsModel();
    this.projects.page = body.page;
    this.projects.projects = body._embedded.projects || {};
    return this.projects;
  }

  private extractSingleData(res: Response) {
    const body = res.json();
    return body || {};
  }

  public getProjects(): Observable<ProjectsModel> {
    return this.http.get(environment.projectsQueryBaseUrl).map(this.extractListData);
  }

  public getProjectsByParams(page: string, size: string): Observable<ProjectsModel> {
    return this.http.get(environment.projectsQueryBaseUrl + '?page=' + page + '&size=' + size).map(this.extractListData);
  }

  public getProject(id: string): Observable<ProjectModel> {
    const url = `${environment.projectsQueryBaseUrl}/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addProject(project: ProjectModel): Observable<any> {
    return this.http.post(environment.projectsCommandBaseUrl, project);
  }

  public updateProject(projectId: string, project: ProjectModel): Observable<any> {
    const url = `${environment.projectsCommandBaseUrl}/${projectId}/updatecommand`;
    return this.http.post(url, project);
  }

  public activateProject(projectId: string): Observable<any> {
    const url = `${environment.projectsCommandBaseUrl}/${projectId}/activatecommand`;
    return this.http.post(url, null);
  }

  public deactivateProject(projectId: string): Observable<any> {
    const url = `${environment.projectsCommandBaseUrl}/${projectId}/deactivatecommand`;
    return this.http.post(url, null);
  }
}
