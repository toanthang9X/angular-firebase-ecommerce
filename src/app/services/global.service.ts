import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Service có thể sử dụng ở bất kỳ đâu trong ứng dụng
})
export class GlobalService {
  private data = new BehaviorSubject<string>('Dữ liệu ban đầu');
  currentData = this.data.asObservable();
  constructor() { }
  updateData(newValue: string) {
    this.data.next(newValue);
  }
  // Tạo BehaviorSubject với giá trị mặc định
  private messageSource = new BehaviorSubject<string>('Hello from Service!');
  
  // Observable cho Component sử dụng
  currentMessage = this.messageSource.asObservable();
  // Hàm cập nhật dữ liệu
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
