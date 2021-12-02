import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
  constructor() {}

}
