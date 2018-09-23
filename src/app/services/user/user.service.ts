import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );
  isAdmin = this.uid.pipe(
    switchMap(uid => {
      if (!uid) {
        return observableOf(false);
      } else {
        return this.db.object('/admins/' + uid).valueChanges()
      }
    })
  );

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  // doLogin() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }

  // doLogout() {
  //   this.afAuth.auth.signOut();
  // }

  doLogin(data) {
    const self = this
    const url = environment.API_URL + '/users/login'
    
    self.http.post(url, data).subscribe(data => {
      return data
    }, err => {
      return err
    });
  }

  doLogout() {

  }

}
