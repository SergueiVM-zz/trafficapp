import { Component } from '@angular/core';
import { TrafficEvent } from './models/traffic-event';
import { AvailableProvincesService } from './services/available-provinces.service';
import { InfocarService } from './services/infocar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trafficEvents: TrafficEvent[];
  provinces: any[];
  roads: any[]

  constructor(private infocarService: InfocarService, private availableProvinceService: AvailableProvincesService) { }

  ngOnInit() {
    this.infocarService.getEvents().subscribe(events => {
      this.trafficEvents = events;

      this.provinces = events.map(item => item.provincia)
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
        .map(province => {
          return {
            "name": province,
            "value": true
          }
        });

      this.roads = events.map(item => item.carretera)
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
        .map(road => {
          return {
            "name": road,
            "value": true
          }
        });
    });
  }

}
