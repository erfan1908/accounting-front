import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: AuthService ,
    private router: Router
  ) {}

  loginData: LoginRequest = {
    nationalCode: '',
    password: ''
  }; 

  errorMessage = '';
  successMessage = '';

  doLogin(): void {
    this.auth.doLogin(this.loginData).subscribe({
      next: (res) => {
        // console.log('✅ ورود موفقیت‌آمیز:', res);
        localStorage.setItem('token',res['token'])
        this.router.navigate(['/landing']);
      },
      error: (err) => {
        // console.error('❌ خطا در ورود:', err);
        this.errorMessage = 'خطا در ورود. لطفاً دوباره تلاش کنید.';
      }
    });
  }
}
