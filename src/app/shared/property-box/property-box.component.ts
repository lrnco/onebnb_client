import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {

  @Input() wishlisted: boolean = false;
  @Input() photo: string;
  @Input() name:  string;
  @Input() price: string;
  @Input() stars: string;
  @Input() whish: string;
  @Input() property_id: string;
  @Input() isLogged: boolean;

  constructor(private PropertiesService: PropertiesService) { }

  ngOnInit() {
  }

  wishlist($event, status, property_id){
    if(this.isLogged) {
      if(status == true){
        this.PropertiesService.addToWishlist(property_id)
          .subscribe(data => {
            this.wishlisted = status;
          }
        );
      }else{
        this.PropertiesService.removeToWishlist(property_id)
          .subscribe(data => {
            this.wishlisted = status;
          }
        );
      }
    } else {
      console.log($event);
      $event.preventDefault();
      $event.stopPropagation();
      this.openLogin.emit(true);
    }
  }
}
