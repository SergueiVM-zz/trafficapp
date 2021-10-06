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

  trafficEvents: TrafficEvent[] = [];
  provinces: any[] = [];
  roads: any[] = [];

  filteredEvents: TrafficEvent[] = [];
  filteredRoads: any[] = [];

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


      this.roads = this.getAvailableRoads();

      this.filterTrafficEvents();
    });

  }

  getActiveProvinces() {
    return this.provinces.filter(item => item.value).map(item => item.name);
  }

  getAvailableRoads() {
    const activeProvices = this.getActiveProvinces();
    return this.trafficEvents
      .filter(trafficEvent => activeProvices.includes(trafficEvent.provincia))
      .map(item => item.carretera)
      .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      .map(road => {
        return {
          "name": road,
          "value": true
        }
      });
  }

  filterRoads(activeProvinces) {
    const activeProvices = this.provinces.filter(item => item.value).map(item => item.name);

  }

  updateRoads() {

    const availableRoads = this.getAvailableRoads();
    const availableRoadsIndex = availableRoads.map(road => road.name);
    //Remove Unavailable Roads
    this.roads = this.roads.filter(road => availableRoadsIndex.includes(road.name));
    //Add new roads
    const roadsIndex = this.roads.map(road => road.name);
    availableRoads.filter(road => !roadsIndex.includes(road.name)).forEach(road => this.roads.push(road));
    console.log
    return this.roads;
  }

  filterTrafficEvents() {
    console.log("filterTrafficEvents");
    const activeProvices = this.getActiveProvinces();
    const activeRoads = this.updateRoads().map(item => item.name);
    this.filteredEvents = this.trafficEvents
      .filter(trafficEvent => activeProvices.includes(trafficEvent.provincia))
      .filter(trafficEvent => activeRoads.includes(trafficEvent.carretera));
  }

}
