import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InfocarService } from './infocar.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableProvincesService {

  availableProvinces: any[] = [];
  provincias: Observable<any[]> = of(this.availableProvinces);

  constructor(private inforcarService: InfocarService) { }

  ngOnInit() {
  }

  getProvinces(): Observable<string[]> {
    return this.provincias;
  }

  addProvince(province: string) {
    console.log("adding province", province);
    this.availableProvinces.push({
      "name": province,
      "value": true
    });
  }
}
