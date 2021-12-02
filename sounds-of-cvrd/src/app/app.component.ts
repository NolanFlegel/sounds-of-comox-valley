import { Component } from '@angular/core';
// import { features } from 'process';
import * as soundscapes from '../assets/soundscapes.json';

interface SoundScape {
  soundFile: string,
  location: {
    lat: number,
    lng: number,
  }
}

interface MyMarkers {
  markerPositions: google.maps.LatLngLiteral,
  markerOptions: google.maps.MarkerOptions,
}

interface MarkerAudio{
  audiofile: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sounds-of-cvrd';
  markerArray = [];
  options: google.maps.MapOptions = {
    mapTypeId:"satellite" ,
    center: {lat: 49.69684635847244, lng: -124.98160288744413}, 
    zoom: 13
  };

  public soundScape: SoundScape[] = [];
  
  public myMarkers: MyMarkers[] = [];

  public markerAudio = new Audio();
  
  markerOptions: google.maps.MarkerOptions = {
    clickable: true,
    title: "SoundScape Marker"
  }
  markerPositions:google.maps.LatLngLiteral[] = [];
  
  
  constructor(){
    this.soundScape = soundscapes;

    // console.log(this.soundScape);
    
    for (let i=0; i < this.soundScape.length; i++) {
      //console.log(this.soundScape[i]);
      let data: MyMarkers = {
        markerPositions: this.soundScape[i].location,
        markerOptions: {
          clickable: true,
          title: this.soundScape[i].soundFile,
          label: (i+1).toString()
        }
      }

      this.myMarkers.push(data);
      //this.markerOptions
    }

  }

  public playSoundscape(options: any){
    this.markerAudio.pause();
    this.markerAudio.src = "../assets/soundscapes/" + options.title;
    this.markerAudio.load();
    this.markerAudio.play();
  }
}
