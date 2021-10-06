import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-filter',
  templateUrl: './province-filter.component.html',
  styleUrls: ['./province-filter.component.css']
})
export class ProvinceFilterComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

  onToggle(item) {
    item.value = !item.value;
  }

}
