import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { PhotographerDetailComponent } from './photographer-detail/photographer-detail.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
=======
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    JoinComponent,
    HomeComponent,
    PhotographerDetailComponent,
<<<<<<< HEAD
    ThankyouComponent,
    SignupComponent
=======
    ThankyouComponent
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    [ RouterModule.forRoot(

      [
        { path: 'signin', component: SignInComponent },
<<<<<<< HEAD
        { path: 'signup', component: SignupComponent },
        { path: 'join', component: JoinComponent },
        { path: 'home', component: HomeComponent },

=======
        { path: 'join', component: JoinComponent },
        { path: 'home', component: HomeComponent },
        
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
        {
          path: 'photographer/:id',
          component: PhotographerDetailComponent
        },
        { path: 'thankyou', component: ThankyouComponent },
<<<<<<< HEAD

=======
  
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
        { path: '', redirectTo: '/join', pathMatch: 'full' }

      ]

    ) ]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
