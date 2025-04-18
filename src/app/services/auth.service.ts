import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private tokenKey = 'auth_token';

  // State lưu trạng thái đăng nhập (dùng BehaviorSubject để cập nhật real-time)
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // Cho component subscribe

  constructor(private http: HttpClient) {}

  // Gửi request login
  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token); // Lưu token vào localStorage
          this.isLoggedInSubject.next(true); // Cập nhật trạng thái đăng nhập
        })
      );
  }

  // Kiểm tra có token không
  hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Đăng xuất
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }
}