import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {

  currentUser: IUser;

  constructor(private http: Http) {}

  loginUser(userName: string, password: string): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let loginInfo = {username: userName, password: password};

    return this.http.post('/api/login', loginInfo, options).do(response => {
      if (response) {
        this.currentUser = <IUser>response.json().user;
      }
    }).catch(error => Observable.of(false));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity')
      .map((response: any) => {
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      }).do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      }).subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout(): Observable<any> {
    this.currentUser = undefined;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(`/api/logout`, {}, options);
  }

}
