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

  login(email: string, password: string) {
    return this.angularfireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

}