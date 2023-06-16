import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent {
  listProducts = [
    {
      backgroundColor: '#D3FBD9',
      img: '../../../assets/imgs/Rectangle19.svg',
      colors: ['red', 'blue', 'green'],
      des: 'Vonna Neva Walnut Sandalye Chair',
      price: '195,13',
    },
    {
      backgroundColor: '#FFE4BD',
      img: '../../../assets/imgs/Rectangle1.svg',
      colors: ['red', 'blue', 'green'],
      des: 'Wood lamp, Floor Lamp, Lambader, Decorative',
      price: '458,43',
    },
    {
      backgroundColor: '#D9ABFD',
      img: '../../../assets/imgs/Rectangle2.svg',
      colors: ['red', 'blue', 'green'],
      des: 'NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple',
      price: '789,67',
    },
    {
      backgroundColor: '#FDF0AB',
      img: '../../../assets/imgs/Rectangle3.svg',
      colors: ['red', 'blue', 'green'],
      des: 'Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches',
      price: '43,23',
    },
  ];
  listPost = [
    {
      img: '../../../assets/imgs/unsplash_bU8TeXhsPcY.jpg',
      title: 'A community doing good',
      des: 'Commerce is a global online marketplace, where people.',
    },
    {
      img: '../../../assets/imgs/unsplash1.png',
      title: 'Support independent creators',
      des: 'Just millions of people selling the things they love.',
    },
    {
      img: '../../../assets/imgs/unsplash2.png',
      title: 'Peace of mind',
      des: 'Privacy is the highest priority of our dedicated team.',
    },
  ]
}
