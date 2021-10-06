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

  onToggle() {
    this.item.value = !this.item.value;
  }

  setClasses() {
    let classes = {
      item: true,
      "btn btn-sm": true,
      "btn-outline-success": this.item.value,
      "btn-outline-danger": !this.item.value
    };

    return classes;
  }
}
