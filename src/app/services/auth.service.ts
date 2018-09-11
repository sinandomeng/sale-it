import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getUserDto(username, password) {
    alert(username + ' ' + password);
    // check user details
    // return this.http.post('/api/auth.php', {
    //   username,
    //   password
    // }).subscribe();
  }

  loginUser(evt) {
    evt.preventDefault()
    console.log(evt)
  }

}
