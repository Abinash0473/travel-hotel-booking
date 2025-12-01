import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .register({ name: this.name, email: this.email, password: this.password })
      .subscribe({
        next: () => {
          this.message = 'Registered successfully. You can login now.';
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.error = err.error?.msg || 'Registration failed';
        }
      });
  }
}
