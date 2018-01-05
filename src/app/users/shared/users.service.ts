import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environment';
import {UserModel} from './user.model';
import {UsersModel} from './users.model';

@Injectable()
export class UsersService {
  users: UsersModel;

  constructor(private http: HttpClient) {
  }

  private extractListData(res) {
    this.users = new UsersModel();
    this.users.page = res.page;
    this.users.users = res._embedded.users || {};
    return this.users;
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

}
