import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
<<<<<<< HEAD
  updatedata = new Subject()
=======
  updatedata = new Subject();
  checkdata = new Subject();
>>>>>>> rahul
}
