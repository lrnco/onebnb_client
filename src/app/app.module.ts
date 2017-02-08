import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule, AlertModule, ButtonsModule, DatepickerModule, CollapseModule, ModalModule, PaginationModule } from "ng2-bootstrap";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

import { routing } from './app.routing';

import { Property } from './shared/property';
import { PropertiesService } from './shared/properties.service';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './shared/search/search.component';
import { FilterComponent } from './shared/filter/filter.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PropertyBoxComponent } from './shared/property-box/property-box.component';
import { MapComponent } from './shared/map/map.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UserEditComponent,
    ResultsComponent,
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    PropertyBoxComponent,
    MapComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule,
    AgmCoreModule.forRoot({ apiKey: environment.maps_api_key})
  ],
  providers: [
    PropertiesService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
