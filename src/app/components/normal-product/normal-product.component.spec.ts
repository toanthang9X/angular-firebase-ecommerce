import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProductComponent } from './normal-product.component';

describe('NormalProductComponent', () => {
  let component: NormalProductComponent;
  let fixture: ComponentFixture<NormalProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalProductComponent]
    });
    fixture = TestBed.createComponent(NormalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
