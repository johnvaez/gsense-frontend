import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth: AngularFireAuth
  ) { }

  public async loginWithGoogle(email: string, password: string) {
    try {
      return await this.AFauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
