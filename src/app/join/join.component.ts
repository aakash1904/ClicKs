<<<<<<< HEAD
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

<<<<<<< HEAD
  constructor(private authservice: AuthService) { }
=======
  constructor() { }
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02

  ngOnInit() {
  }

<<<<<<< HEAD
  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signUpuser(email,password);
  }

=======
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
}
