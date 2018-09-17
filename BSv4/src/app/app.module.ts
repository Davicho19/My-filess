import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';


import { APP_ROUTER } from './app.routes';
import { TablaDeDecisionComponent } from './tabla-de-decision/tabla-de-decision.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TablResultadosComponent } from './tabla-de-decision/tabl-resultados/tabl-resultados.component';

@NgModule({
   declarations: [
      AppComponent,
      TablaDeDecisionComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      TablResultadosComponent
   ],
   imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    APP_ROUTER

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
