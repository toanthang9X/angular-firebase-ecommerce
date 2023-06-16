import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRelatedInforComponent } from './footer-related-infor.component';

describe('FooterRelatedInforComponent', () => {
  let component: FooterRelatedInforComponent;
  let fixture: ComponentFixture<FooterRelatedInforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterRelatedInforComponent]
    });
    fixture = TestBed.createComponent(FooterRelatedInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
