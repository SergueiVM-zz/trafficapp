import { Component } from '@angular/core';
import { AvailableProvincesService } from './services/available-provinces.service';
import { InfocarService } from './services/infocar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private infocarService: InfocarService, private availableProvinceService: AvailableProvincesService) { }

  ngOnInit() {
    this.infocarService.getEvents().subscribe(events => {
      const availableProvinces = events.map(item => item.provincia)
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
        .forEach(province => this.availableProvinceService.addProvince(province));
    });
  }

}
