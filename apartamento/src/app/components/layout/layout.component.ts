import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [RouterModule, HeaderComponent, NgImageSliderModule]
})
export class LayoutComponent {
  currentYear: number = new Date().getFullYear();

  imageObject: Array<object> = [
    {image: '/assets/IMG_01.jpg', thumbImage: '/assets/IMG_01.jpg', alt: 'Imagen 1'},
    {image: '/assets/IMG_02.jpg', thumbImage: '/assets/IMG_A.gif', alt: 'Imagen 2'},
    {image: '/assets/IMG_03.jpg', thumbImage: '/assets/IMG_09.jpg', alt: 'Imagen 3'},
  ];
}

