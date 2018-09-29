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

  form: FormGroup;
  check: boolean = true;

  listofUsers: User[] = [
      {email: 'differaakash@gmail.com', password: 'aakash'},
      {email: 'rahulnadar@rediffmail.com', password: 'rahul'},
      {email: 'tarandeep@gmail.com', password: 'tarandeep'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.email, Validators.required, Validators.minLength(10)]}),
      'password': new FormControl(null, {validators: [Validators.required]}),
    });
  }

  onSignin() {
    this.listofUsers.forEach(item => {
      if (item.email === this.form.value.email && item.password === this.form.value.password ) {
        return this.router.navigate(['/home']);
      } else {
         this.check = false;
         return this.form.reset();
      }
    });


  }

}
