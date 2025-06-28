import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoginMode = true;
  rememberMe = false;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  setLoginMode(mode: boolean): void {
    this.isLoginMode = mode;
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    console.log('Logging in with', email, password);
    // Implement your login logic here
  }

  onRegister(): void {
    if (this.registerForm.invalid) return;

    const { password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Registering user:', this.registerForm.value);
    // Implement your registration logic here
  }
}
