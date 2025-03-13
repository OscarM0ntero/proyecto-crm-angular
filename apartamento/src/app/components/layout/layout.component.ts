import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css'],
	imports: [RouterModule, HeaderComponent, CarouselModule]
})
export class LayoutComponent {
	currentYear: number = new Date().getFullYear();

    images = [
        { itemImageSrc: '/assets/IMG_01.jpg', alt: 'Imagen 1' },
        { itemImageSrc: '/assets/IMG_05.jpg', alt: 'Imagen 2' },
        { itemImageSrc: '/assets/IMG_09.jpg', alt: 'Imagen 3' }
    ];

    responsiveOptions = [
        { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
        { breakpoint: '768px', numVisible: 1, numScroll: 1 },
        { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];
}

