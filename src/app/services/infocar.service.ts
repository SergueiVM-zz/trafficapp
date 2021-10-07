import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrafficEvent } from '../models/traffic-event';
import { environment } from 'src/environments/environment';
import { AvailableProvincesService } from './available-provinces.service';

@Injectable({
  providedIn: 'root'
})
export class InfocarService {


  constructor(private http: HttpClient) { }

  getEvents(): Observable<TrafficEvent[]> {
    const httpResults = this.http.get<TrafficEvent[]>(environment.infocarUrl);
    return httpResults;
  }
}
