import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environment';
import {UserModel} from './user.model';
import {UsersModel} from './users.model';
import { RolesModel } from './roles.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private extractListData(res) {
    const users: UsersModel = new UsersModel();
    users.page = res.page;
    users.users = res._embedded.users || {};
    return users;
  }

  private extractRolesListData(res) {
    const roles: RolesModel = new RolesModel();
    roles.page = res.page;
    roles.roles = res._embedded.roles || {};
    return roles;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getUsers(): Observable<UsersModel> {
    return this.http.get(environment.usersBaseUrl).map(this.extractListData);
  }

  public getUsersByParams(page: string, size: string): Observable<UsersModel> {
    return this.http.get(environment.usersBaseUrl + '?page=' + page + '&size=' + size).map(this.extractListData);
  }

  public getUser(id: string): Observable<UserModel> {
    const url = `${environment.usersBaseUrl}/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addUser(user: UserModel): Observable<any> {
    return this.http.post(environment.usersBaseUrl, user);
  }

  public updateUser(userId: string, user: UserModel): Observable<any> {
    const url = `${environment.usersBaseUrl}/${userId}`;
    return this.http.put(url, user);
  }

  public getAllRoles(): Observable<RolesModel> {
    return this.http.get(environment.rolesBaseUrl).map(this.extractRolesListData);
  }

  public getAllRolesOfUser(userId: string): Observable<RolesModel> {
    const url = `${environment.usersBaseUrl}/${userId}/roles`;
    return this.http.get(url).map(this.extractRolesListData);
  }
}
