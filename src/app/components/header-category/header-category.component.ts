import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {
  @Input() categories: any;
  handleClick = (item: any) => {
    this.categories.forEach((category: any) => {
      if (category === item) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    });
  }
}
