import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { TablaDeDecisionComponent } from './tabla-de-decision/tabla-de-decision.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const APPROUTES: Routes = [
 { path: 'login', component:  LoginComponent },
 { path: 'register', component:  RegisterComponent},
 { path: 'tabla', component:  TablaDeDecisionComponent },
 { path: 'home', component:  HomeComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);
