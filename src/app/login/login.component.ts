import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private error;

  constructor(private fb: FormBuilder, private ls: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onLogin() {
    this.ls.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.username);
        this.error = null;
        this.loginForm.value['username'] = '';
        this.loginForm.value['password'] = '';
        console.log(data);
        this.router.navigateByUrl('/');
      },
      error => {
        this.error = error.error;
      }
      );
  }
}
