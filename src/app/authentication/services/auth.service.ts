import { Injectable } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {
 
  constructor(private angularfireAuth: AngularFireAuth) { }

  register(email: string, password: string) {
    return this.angularfireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
 
}