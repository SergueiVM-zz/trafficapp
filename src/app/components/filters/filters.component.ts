import { Component, Input, OnInit, Output } from '@angular/core';
import { AvailableProvincesService } from 'src/app/services/available-provinces.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() provinces: any[];
  @Input() roads: any[];

  constructor(private availableProvincesService: AvailableProvincesService) { }

  ngOnInit(): void { }

  toggleProvinces() {
    this.provinces.forEach(province => province.value = !province.value);
  }

  toggleRoads() {
    this.roads.forEach(road => road.value = !road.value);

  }
}
