import { Component, OnInit } from '@angular/core';
import{Photographer} from '../photographer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPhotographers = this.listFilter ? this.performFilter(this.listFilter) : this.photographers;
  }
  filteredPhotographers: Photographer[];


  photographers: Photographer[]=[
   
    { "id":"1",
      "name": "Ram",
      "location": "Kolkata"
    },
      {"id":"2",
        "name": "Sham",
      "location": "Cuttack"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  performFilter(filterBy: string): Photographer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.photographers.filter((photographer: Photographer) =>
      photographer.location.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
