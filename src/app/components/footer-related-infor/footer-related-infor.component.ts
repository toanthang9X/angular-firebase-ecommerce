import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-related-infor',
  templateUrl: './footer-related-infor.component.html',
  styleUrls: ['./footer-related-infor.component.scss']
})
export class FooterRelatedInforComponent {
  footer_infor = [
    {
      title: 'Shop',
      sub: ['Gift cards', 'Site map', 'Polka blog', 'Login', 'Sign in'],
    },
    {
      title: 'Sell',
      sub: ['Sell on Polka', 'Teams', 'Forums', 'Affiliates'],
    },
    {
      title: 'About',
      sub: ['Polka, Inc.', 'Policies', 'Investors', 'Careers', 'Press'],
    },
    {
      title: 'Help',
      sub: ['Help Center', 'Trust and safety', 'Privacy settings'],
    }
  ];
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
