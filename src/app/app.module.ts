import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about.component';
import { CalendarComponent } from './components/calendar.component';
import { DashboardComponent } from './components/dashboard.component';
import { EmailComponent } from './components/email.component';
import { HomeComponent } from './components/home.component';
import { RolesComponent } from './components/roles.component';
import { SettingsComponent } from './components/settings.component';
import { UsersComponent } from './components/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalendarComponent,
    DashboardComponent,
    EmailComponent,
    HomeComponent,
    RolesComponent,
    SettingsComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
