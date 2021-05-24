import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
})
export class MunsterPage implements OnInit {

  countiesMunster: string[] = ["Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"];

  constructor() { }

  ngOnInit() {
  }

}
