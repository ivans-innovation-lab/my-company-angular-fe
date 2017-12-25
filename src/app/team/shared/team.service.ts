import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Response, RequestOptions } from '@angular/http';
import { TeamModel } from './team.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TeamsModel } from './teams.model';

@Injectable()
export class TeamsService {
    teams: TeamsModel;

    constructor(private http: HttpClient) { }

    private extractListData(res) {
        this.teams = new TeamsModel();
        this.teams.page = res.page;
        this.teams.teams = res._embedded.team || {};
        return this.teams;
    }

    private extractSingleData(res) {
        return res || {};
    }

    public geTeams(): Observable<TeamsModel> {
        return this.http.get(environment.teamsQueryBaseUrl)
            .map(this.extractListData);
    }

    public getTeamsByParams(page: string, size: string): Observable<TeamsModel> {

        return this.http.get(environment.teamsQueryBaseUrl + '?page=' + page + '&size=' + size)
            .map(this.extractListData);
    }

    public getTeam(id: string): Observable<TeamModel> {
        const url = `${environment.teamsQueryBaseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractSingleData);
    }

    public addTeam(project: TeamModel): Observable<any> {
        return this.http.post(environment.teamsCommandBaseUrl, project);
    }
}
