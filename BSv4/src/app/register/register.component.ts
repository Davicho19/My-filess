import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RouterLink, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
  }
  email: string;
  password: string;


  constructor(public authService: AuthService, private _firebaseAuth: AngularFireAuth, private router: Router) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  this.router.navigateByUrl('/tabla');
  }
  tabla(){
    this.router.navigateByUrl('/tabla');
  }
}
