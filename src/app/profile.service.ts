import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  username: any;

  getUserDetails(uname) {
    return this.http.get('https://api.github.com/users/' + uname);
  }

  getRepoDetails(uname) {
    return this.http.get('https://api.github.com/users/' + uname + '/repos');
  }
}
