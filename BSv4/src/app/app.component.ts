import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  email: string;
  password: string;


  constructor(public authService: AuthService, private _firebaseAuth: AngularFireAuth) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.authService.logout();
    this._firebaseAuth.auth.signOut();

  }
}
