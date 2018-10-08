import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Clicks';

  ngOnInit() {

    firebase.initializeApp({
      apiKey: "AIzaSyDnK0RN-ttEG00tt_b4Ufsz95lmTar8QGM",
      authDomain: "ng-clicks.firebaseapp.com"
    });

  }
}
