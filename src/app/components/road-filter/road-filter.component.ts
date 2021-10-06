import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-road-filter',
  templateUrl: './road-filter.component.html',
  styleUrls: ['./road-filter.component.css']
})
export class RoadFilterComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() { }


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
