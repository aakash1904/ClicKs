<<<<<<< HEAD
import { AuthService } from './../auth.service';
=======
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
import { DataService } from './../services/data.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signedin: boolean;
  form: FormGroup;
  check: boolean= true;

<<<<<<< HEAD
  // listofUsers: User[] = [
  //     {email: 'differaakash@gmail.com', password: 'aakash'},
  //     {email: 'rahulnadar@rediffmail.com', password: 'rahul'},
  //     {email: 'taran@gmail.com', password: 'taran'}
  // ];

  constructor(private router: Router, private dataservice: DataService, private authservice: AuthService) { }
=======
  listofUsers: User[] = [
      {email: 'differaakash@gmail.com', password: 'aakash'},
      {email: 'rahulnadar@rediffmail.com', password: 'rahul'},
      {email: 'taran@gmail.com', password: 'taran'}
  ];

  constructor(private router: Router, private dataservice: DataService) { }
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.email, Validators.required, Validators.minLength(10)]}),
      'password': new FormControl(null, {validators: [Validators.required]}),
    });
<<<<<<< HEAD

    this.dataservice.checkdata.subscribe(
      (response : boolean) => this.check = response
    )
  }

  onSignin() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authservice.signInuser(email,password);
    // this.listofUsers.forEach(item => {
    //   if (item.email === this.form.value.email && item.password === this.form.value.password ) {
    //       this.router.navigate(['/home']);
    //        this.check = true;
    //        this.signedin = true;
    //        return this.dataservice.updatedata.next(this.signedin)
    //      }
    // });
    // this.form.reset();
    //return this.check = false;
=======
  }

  onSignin() {
    this.listofUsers.forEach(item => {
      if (item.email === this.form.value.email && item.password === this.form.value.password ) {
          this.router.navigate(['/home']);
           this.check = true;
           this.signedin = true;
           return this.dataservice.updatedata.next(this.signedin)
         }
    });
    this.form.reset();
    return this.check = false;
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02

  }

}
