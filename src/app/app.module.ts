import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { PhotographerDetailComponent } from './photographer-detail/photographer-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    JoinComponent,
    HomeComponent,
    PhotographerDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule,
    [ RouterModule.forRoot(

      [
        { path: 'signin', component: SignInComponent },
        { path: 'join', component: JoinComponent },
        { path: 'home', component: HomeComponent },
        { path: 'detail', component: PhotographerDetailComponent },
        { path: '', redirectTo: '/join', pathMatch: 'full' }

      ]

    ) ]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
