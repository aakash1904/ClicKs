<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
=======
import { Component } from '@angular/core';
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  title = 'Clicks';

  ngOnInit() {

    firebase.initializeApp({
      apiKey: "AIzaSyDnK0RN-ttEG00tt_b4Ufsz95lmTar8QGM",
      authDomain: "ng-clicks.firebaseapp.com"
    })

  }
=======
export class AppComponent {
  title = 'Clicks';
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
}
