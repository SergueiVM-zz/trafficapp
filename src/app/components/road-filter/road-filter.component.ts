import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectionItem } from 'src/app/models/selection-item';

@Component({
  selector: 'app-road-filter',
  templateUrl: './road-filter.component.html',
  styleUrls: ['./road-filter.component.css']
})
export class RoadFilterComponent implements OnInit {

  @Input() item: SelectionItem;
  @Output() onToggleRoad: EventEmitter<SelectionItem> = new EventEmitter();


  constructor() { }

  ngOnInit() { }


  onToggle() {
    console.log("RoadFilterComponent onToogle");
    this.item.value = !this.item.value;
    this.onToggleRoad.emit(null);
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
