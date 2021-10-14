import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  passwordMatched: boolean = false;
  signUpForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validator: this.PasswordMustMatch('password', 'confirmPassword') }
  );

  PasswordMustMatch(pass: string, confirmPass: string) {
    return (formGroup: FormGroup) => {
      const password = formGroup.controls[pass]; // password field
      const confirmPassword = formGroup.controls[confirmPass]; // confirmPassword field
      // set an error if it dosnet match
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ isPasswordMatch: false });
        this.passwordMatched = false;
      } else {
        confirmPassword.setErrors(null);
        this.passwordMatched = true;
      }
    };
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }
}
