import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ThanksmessageComponent } from './components/thanksmessage/thanksmessage.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'agradecimento', component: ThanksmessageComponent }];
