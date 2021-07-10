import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { CalendarComponent } from './components/calendar.component';
import { DashboardComponent } from './components/dashboard.component';
import { EmailComponent } from './components/email.component';
import { HomeComponent } from './components/home.component';
import { RolesComponent } from './components/roles.component';
import { SettingsComponent } from './components/settings.component';
import { UsersComponent } from './components/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'email', component: EmailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
