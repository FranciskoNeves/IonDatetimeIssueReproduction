import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pickerDate: string;
  maxMonthYear: string;

  constructor() {
    this.pickerDate = '2023-01-01';
    this.maxMonthYear = '2028-01-01';
  }

  dateChanged(event: any) {
    this.pickerDate = event.detail.value.toString();
  };

}
