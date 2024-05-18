import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {

  responsiveOptions: any[] | undefined;

  brands: any[] = [];

  brand = [
  {
    name: 'Google',
    img: 'google.png'
  },
  {
    name: 'Meta',
    img: 'meta.png'
  },
  {
    name: 'Microsoft',
    img: 'microsoft.png'
  },
];

ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
    
  }


}
