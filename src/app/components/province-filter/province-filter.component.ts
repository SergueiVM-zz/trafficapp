import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionItem } from 'src/app/models/selection-item';

@Component({
  selector: 'app-province-filter',
  templateUrl: './province-filter.component.html',
  styleUrls: ['./province-filter.component.css']
})
export class ProvinceFilterComponent implements OnInit {

  @Input() item: SelectionItem;
  @Output() toggleProvince: EventEmitter<SelectionItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(item: SelectionItem) {
    console.log("ProvinceFilterComponent onToggle")
    this.item.value = !this.item.value;
    this.toggleProvince.emit(this.item);
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
