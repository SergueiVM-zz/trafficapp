import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionItem } from 'src/app/models/selection-item';
import { AvailableProvincesService } from 'src/app/services/available-provinces.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() provinces: any[];
  @Input() roads: any[];
  @Output() onToggleProvince: EventEmitter<SelectionItem> = new EventEmitter();

  constructor(private availableProvincesService: AvailableProvincesService) { }

  ngOnInit(): void { }

  toggleProvinces() {
    this.provinces.forEach(province => province.value = !province.value);
    this.onToggleProvince.emit(null);

  }

  toggleRoads() {
    this.roads.forEach(road => road.value = !road.value);
  }

  selectionChanged() {
    console.log("selectionChanged");
    this.onToggleProvince.emit(null);
  }
}
