import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulster',
  templateUrl: './ulster.page.html',
  styleUrls: ['./ulster.page.scss'],
})
export class UlsterPage implements OnInit {

  countiesUlster: string[] = ["Antrim", "Armagh", "Cavan", "Derry", "Donegal", "Down", "Fermanagh", "Monaghan", "Tyrone"];

  constructor() { }

  ngOnInit() {
  }

}
