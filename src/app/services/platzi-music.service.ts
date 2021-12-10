import { Injectable } from '@angular/core';
import {default as dataArtists} from './artists.json';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor() { }

  getArtists() {
    return dataArtists.items;
  }

  getNewReleases() {
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases')
      .then(response => response.json());
  }
}
