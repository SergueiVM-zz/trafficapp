import { Component, Input, OnInit } from '@angular/core';
import { TrafficEvent } from 'src/app/models/traffic-event';
import { InfocarService } from 'src/app/services/infocar.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  @Input() trafficEvents: TrafficEvent[];



  constructor(private infocarService: InfocarService) { }

  ngOnInit(): void { }

  

}
