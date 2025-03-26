import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  template: `<p>👶 Giá trị nhận được từ Parent: {{ data }}</p>`,
})
export class ChildComponent {
  @Input() data!: string; // Nhận dữ liệu từ Parent
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Xin chào từ Child!"); // Gửi dữ liệu lên Parent
  }
}
