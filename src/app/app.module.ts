import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropdownModule, AlertModule, CarouselModule, ButtonsModule, DatepickerModule, CollapseModule, ModalModule, PaginationModule, TypeaheadModule, TooltipModule } from "ng2-bootstrap";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

import { routing } from './app.routing';

import { Property } from './shared/property';
import { PropertiesService } from './shared/properties.service';
import { UsersService } from './shared/users.service';
import { ReservationService } from './shared/reservation.service';
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
import { ReservationBoxComponent } from './shared/reservation-box/reservation-box.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { CommentBoxComponent } from './shared/comment-box/comment-box.component';
import { UserDetailBoxComponent } from './shared/user-detail-box/user-detail-box.component';
import { SendMessageComponent } from './shared/send-message/send-message.component';

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
    ReservationBoxComponent,
    LightboxComponent,
    CommentBoxComponent,
    UserDetailBoxComponent,
    SendMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CollapseModule,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    TooltipModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: environment.maps_api_key})
  ],
  providers: [
    PropertiesService,
    UsersService,
    ReservationService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
