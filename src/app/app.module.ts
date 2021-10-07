import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ResultsComponent } from './components/results/results.component';
import { TrafficEventComponent } from './components/traffic-event/traffic-event.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvinceFilterComponent } from './components/province-filter/province-filter.component';
import { RoadFilterComponent } from './components/road-filter/road-filter.component';
import { SwapButtonComponent } from './components/swap-button/swap-button.component';
import { SelectAllButtonComponent } from './components/select-all-button/select-all-button.component';
import { UnselectAllButtonComponent } from './components/unselect-all-button/unselect-all-button.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    ResultsComponent,
    TrafficEventComponent,
    ProvinceFilterComponent,
    RoadFilterComponent,
    SwapButtonComponent,
    SelectAllButtonComponent,
    UnselectAllButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
