import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private angularfireAuth: AngularFireAuth) {
    this.user$ = angularfireAuth.authState;
  }

  register(email: string, password: string) {
    return this.angularfireAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  sendEmailVerification() {
    const user = firebase.auth().currentUser;
    firebase.auth().languageCode = 'fr';
    if(user) {
      console.log('user in sendEmailVerification', user);
      user.sendEmailVerification().then(() => {
        console.log('email envoyé');
      }).catch((error) => {
        console.error('error sending email', error);
      });
    }

  }


  login(email: string, password: string) {
    return this.angularfireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.angularfireAuth
      .auth
      .signOut();
  }

}