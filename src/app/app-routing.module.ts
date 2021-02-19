import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { CredentialsComponent } from './Pages/credentials/credentials.component';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '', component: CredentialsComponent
  },
  {
    path: 'welcome', component: WelcomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
