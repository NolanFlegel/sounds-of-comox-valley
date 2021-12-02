import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sounds-of-cvrd';
  options: google.maps.MapOptions = {
    center: {lat: 49.6877, lng: -125.01614},
    zoom: 11
  };
  markerOptions: google.maps.MarkerOptions = {}
  markerPosition:google.maps.LatLngLiteral = {lat: 49.6877, lng: -125.01614};


  helloWorld(){}

  playSoundscape(){



  }
}
