import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  hide = true; // Control for password visibility

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the login form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit(): void {
    // if (this.loginForm.valid) {
    //   // Call the login method from the AuthService
    //   this.authService.login(this.loginForm.value).subscribe(
    //     response => {
    //       // Handle successful login
    //       console.log('Login successful:', response);
    //       this.router.navigate(['/dashboard']); // Navigate to the dashboard
    //     },
    //     error => {
    //       // Handle login error
    //       console.error('Login error:', error);
    //     }
    //   );
    // }

    if(this.loginForm.valid){
      if(this.authService.login(this.loginForm.value)){
        console.log('Login successful');
      }
    }
  }

   // Helper method to avoid null checks in the template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}