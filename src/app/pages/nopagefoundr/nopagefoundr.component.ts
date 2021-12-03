import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefoundr',
  templateUrl: './nopagefoundr.component.html',
  styleUrls: [ './nopagefoundr.component.css'
  ]
})
export class NopagefoundrComponent  {

  constructor() { }

  year = new Date().getFullYear();

}
