import { Component, Input, OnInit } from '@angular/core';
import { TrafficEvent } from 'src/app/models/traffic-event';
import { InfocarService } from 'src/app/services/infocar.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  resultEvents: TrafficEvent[];
  provinces_filter: string[] = [];


  constructor(private infocarService: InfocarService) { }

  ngOnInit(): void {
    this.infocarService.getEvents().subscribe(items => {
      this.resultEvents = [];
      if (this.provinces_filter.length > 0) {
        this.provinces_filter.forEach(province => {
          const filtered_items = items.filter(item => {
            return province == item.provincia;
          });
          console.log(filtered_items);
          this.resultEvents = this.resultEvents.concat(filtered_items).sort((a, b) => a.codEle > b.codEle ? 1 : -1);
        });
      } else {
        this.resultEvents = items;
      }

    });
  }

}
