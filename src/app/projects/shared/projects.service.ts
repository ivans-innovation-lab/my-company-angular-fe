import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Response } from '@angular/http';
import { ProjectModel } from './project.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProjectsService {

    constructor(private http: AuthHttp) { }

    private extractListData(res: Response) {
        const body = res.json();
        return body._embedded.projects || {};
    }

    private extractSingleData(res: Response) {
        const body = res.json();
        return body || {};
    }

    public getProjects(): Observable<ProjectModel[]> {
        return this.http.get(environment.projectsQueryBaseUrl)
            .map(this.extractListData);
    }

    public getProject(id: string): Observable<ProjectModel> {
        const url = `${environment.projectsQueryBaseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractSingleData);
    }

    public addProject(project: ProjectModel): Observable<any> {
        return this.http.post(environment.projectsCommandBaseUrl, project);
    }
}
