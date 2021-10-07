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
  @Output() onFilterChange: EventEmitter<SelectionItem> = new EventEmitter();

  constructor(private availableProvincesService: AvailableProvincesService) { }

  ngOnInit(): void { }

  toggleProvinces() {
    this.provinces.forEach(province => province.value = !province.value);
    this.provinceSelectionChanged();

  }

  toggleRoads() {
    this.roads.forEach(road => road.value = !road.value);
    this.roadSelectionChanged();
  }

  provinceSelectionChanged() {
    this.onFilterChange.emit(null);
  }
  roadSelectionChanged() {
    this.onFilterChange.emit(null);
  }
}
