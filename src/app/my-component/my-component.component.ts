import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  currentCustomer = 'Maria';
  isUnchanged = true;
  onClick(): void {
    this.isUnchanged = !this.isUnchanged;
  };
  price = 1000; // Giá trị số để định dạng tiền tệ
  date = new Date(); // Ngày hiện tại
  items = ['Sản phẩm A', 'Sản phẩm B'];

  newItems = [{ id: 1, name: 'Sản phẩm A' }, { id: 2, name: 'Sản phẩm B' }];

  trackById(index: number, item: any): number {
    return item.id;
  }
  status = 'pending';
  orders = [
    { id: 101, status: 'pending' },
    { id: 102, status: 'shipped' },
    { id: 103, status: 'delivered' },
    { id: 104, status: 'unknown' }
  ];

  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message; // Nhận dữ liệu từ Child
  }

  constructor(private globalService: GlobalService, private router: Router, private authService: AuthService) {}
  message: string = '';
  ngOnInit() {
    // Lắng nghe thay đổi từ Service
    this.globalService.currentMessage.subscribe(msg => this.message = msg);
  }

  sendMessage() {
    this.globalService.changeMessage('Hello from Parent Component!');
  }

  // router
  goToHome() {
    this.router.navigate(['/home']);
  }

  // call api
  email = '';
  password = '';
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => alert('Đăng nhập thành công!'),
      error: (err) => alert('Đăng nhập thất bại: ' + err.message),
    });
  }
}
