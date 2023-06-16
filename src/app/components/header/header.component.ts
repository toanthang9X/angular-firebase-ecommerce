import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `
    <h1>Parent Component</h1>
    <app-header-category [categories]="categories"></app-header-category>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedOption: string = 'allCategories';
  categories = [
    // {
    //   title: 'All Categories',
    //   value: 'allCategories',
    // },
    {
      title: 'Clothing & Shoes',
      value: 'clothingShoes',
      selected: true,
    },
    {
      title: 'Home & Living',
      value: 'homeLiving',
      selected: false,
    },
    {
      title: 'Wedding & Party',
      value: 'weddingParty',
      selected: false,
    },
    {
      title: 'Toys & Entertainment',
      value: 'toysEntertainment',
      selected: false,
    },
    {
      title: 'Art & Collectibles',
      value: 'artCollectibles',
      selected: false,
    },
    {
      title: 'Craft Supplies & Tools',
      value: 'craftSuppliesTools',
      selected: false,
    },
  ];
}
