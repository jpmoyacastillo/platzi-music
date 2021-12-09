import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };

  slides = [
    {
    imageSrc: '../../assets/img/logo.png',
    imageAlt: 'Platzi Music Logo',
    title: 'Escucha tu música',
    subTitle: 'EN CUALQUIER LUGAR',
    description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.',
    icon: 'play',
    },
    {
    imageSrc: '../../assets/img/logo.png',
    imageAlt: 'Platzi Music Logo',
    title: 'Escucha tu música',
    subTitle: 'EN CUALQUIER LUGAR',
    description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.',
    icon: 'play',
    },
    {
    imageSrc: '../../assets/img/logo.png',
    imageAlt: 'Platzi Music Logo',
    title: 'Escucha tu música',
    subTitle: 'EN CUALQUIER LUGAR',
    description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.',
    icon: 'play',
    },

  ];
  constructor(
    private router: Router,
    private storage: Storage,
  ) { }
  finish(){
    //console.log('hola');
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {
  }

}
