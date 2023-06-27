import { Component, Input  } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

export interface Category {
  idDoc: string; 
  name: string;
  path: string;
}

export interface Product {
  idDoc: string; 
  name: string;
}
@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})
export class HeaderCategoryComponent {
  @Input() categories: any;
  cat$: Observable<Category[]>;
  prod$: Observable<Product[]>;

  constructor(cat: CategoryService, prod: ProductService) {
    this.cat$ = cat.category$;
    this.cat$.subscribe(a => console.log(a, 'category'))

    this.prod$ = prod.productItem$;
    this.prod$.subscribe(a => console.log(a, 'product'))
  }
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
