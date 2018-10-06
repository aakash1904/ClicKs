import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signedin: boolean = false;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
      this.dataservice.updatedata.subscribe(
        (response: boolean) => this.signedin = response
      );
  }

  onclick() {
    this.signedin = false;
    this.dataservice.updatedata.next(this.signedin);
<<<<<<< HEAD

=======
    
>>>>>>> 50d7d96ba3e4b8f799584a286df4845f41114f02
  }

}
