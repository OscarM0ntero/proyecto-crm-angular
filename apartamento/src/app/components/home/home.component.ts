import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
	selector: 'app-home',
	imports: [CommonModule, CarouselModule],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
    images = [
        { itemImageSrc: '/assets/IMG_01.jpg', alt: 'Imagen 1' },
        { itemImageSrc: '/assets/IMG_02.jpg', alt: 'Imagen 2' },
        { itemImageSrc: '/assets/IMG_03.jpg', alt: 'Imagen 3' },
        { itemImageSrc: '/assets/IMG_04.jpg', alt: 'Imagen 4' },
        { itemImageSrc: '/assets/IMG_05.jpg', alt: 'Imagen 5' },
        { itemImageSrc: '/assets/IMG_06.jpg', alt: 'Imagen 6' },
        { itemImageSrc: '/assets/IMG_07.jpg', alt: 'Imagen 7' },
        { itemImageSrc: '/assets/IMG_08.jpg', alt: 'Imagen 8' },
        { itemImageSrc: '/assets/IMG_09.jpg', alt: 'Imagen 9' },
        { itemImageSrc: '/assets/IMG_10.jpg', alt: 'Imagen 10' },
        { itemImageSrc: '/assets/IMG_11.jpg', alt: 'Imagen 11' },
        { itemImageSrc: '/assets/IMG_12.jpg', alt: 'Imagen 12' },
        { itemImageSrc: '/assets/IMG_13.jpg', alt: 'Imagen 13' },
        { itemImageSrc: '/assets/IMG_14.jpg', alt: 'Imagen 14' },
        { itemImageSrc: '/assets/IMG_15.jpg', alt: 'Imagen 15' },
        { itemImageSrc: '/assets/IMG_16.jpg', alt: 'Imagen 16' },
        { itemImageSrc: '/assets/IMG_17.jpg', alt: 'Imagen 17' },
        { itemImageSrc: '/assets/IMG_18.jpg', alt: 'Imagen 18' }
    ];

    responsiveOptions = [
        { breakpoint: '1200px', numVisible: 3, numScroll: 1 },
        { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
        { breakpoint: '768px', numVisible: 1, numScroll: 1 }
    ];
}
