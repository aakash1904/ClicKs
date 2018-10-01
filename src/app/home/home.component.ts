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
  filteredPhotographers: Photographer[]=[];


  photographers: Photographer[]=[
   
    { "id":"1",
      "name": "Ram",
      "location": "Kolkata"
    },
      {"id":"2",
        "name": "Sham",
      "location": "Cuttack"
    },
        
      { "id":"3",
        "name": "Naman",
        "location": "Bhubhneshwar"
      },
        {"id":"4",
          "name": "Taman",
        "location": "Ludhaina"
      },
      { "id":"5",
      "name": "Mohit",
      "location": "Noida"
      },
      {"id":"6",
        "name": "Yatin",
      "location": "Delhi"
      }
      ,
      {"id":"7",
      "name": "Aurish",
    "location": "Jagraon"
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
