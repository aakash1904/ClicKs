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

  listofUsers: User[] = [
      {email: 'differaakash@gmail.com', password: 'aakash'},
      {email: 'rahulnadar@rediffmail.com', password: 'rahul'},
      {email: 'taran@gmail.com', password: 'taran'}
  ];

  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.email, Validators.required, Validators.minLength(10)]}),
      'password': new FormControl(null, {validators: [Validators.required]}),
    });
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

  }

}
