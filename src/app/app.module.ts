import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ResultsComponent } from './components/results/results.component';
import { TrafficEventComponent } from './components/traffic-event/traffic-event.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvinceFilterComponent } from './components/province-filter/province-filter.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    ResultsComponent,
    TrafficEventComponent,
    ProvinceFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
