import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,[ RouterModule.forRoot(

      [
        { path: 'signin', component: SignInComponent },
        { path: 'join', component: JoinComponent },
        { path: '', redirectTo: '/join', pathMatch: 'full' },

      ]

    ) ]
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
