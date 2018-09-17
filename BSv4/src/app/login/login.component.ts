import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RouterLink, Router } from '../../../node_modules/@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
  email: string;
  password: string;



  constructor(public authService: AuthService, private _firebaseAuth: AngularFireAuth, private router: Router) {}


  login() {

    if(this.authService.login(this.email, this.password)){
    };
    this.email = this.password = '';
  }
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    this.authService.logout();
    this._firebaseAuth.auth.signOut()

  }
  tabla(){
    this.router.navigateByUrl('/tabla');
  }

}
