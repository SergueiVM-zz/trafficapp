import { Component, Input, OnInit, Output } from '@angular/core';
import { AvailableProvincesService } from 'src/app/services/available-provinces.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  provinces: any[];
  provincias: any[] = [];

  constructor(private availableProvincesService: AvailableProvincesService) { }

  ngOnInit(): void {
    this.availableProvincesService.getProvinces().subscribe(provinces => {
      this.provinces = provinces;
      console.log(this.provinces.length);
    });
  }

  selectedFilter(item: any) {

  }
}
