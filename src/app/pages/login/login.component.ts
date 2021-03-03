import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalid: boolean;
  errorMsg: string;
  loginForm: FormGroup = new FormGroup({
  	email: new FormControl(null, [Validators.required, Validators.email]),
  	password: new FormControl(null, [Validators.required]),
  });

  constructor(private userService: UserService, private _router: Router) { }

  async ngOnInit(): Promise<void> {
	  this.invalid = false;
	  this.errorMsg = '';
	  let logged = await this.checkIfLoggedIn();
	  if(logged) {
	  	this._router.navigate(['/']);
	  }
  }

  showErrorMessage(message: string) {
  	this.invalid = true;
	this.errorMsg = message;
  }

  async checkIfLoggedIn():Promise<boolean> {
 	
	try {
		await this.userService.user().toPromise();
		return true;
	}catch (e) {
		return false;	
	}
  }

  login() {

	if(! this.loginForm.valid) {
		this.showErrorMessage('Formulario invalido')
		console.log('Invalid form');
		return;
	}

	this.invalid = false;
	this.userService.login(JSON.stringify((this.loginForm.value))).subscribe(
		data => {
			this._router.navigate(['/']);
		},
		error => {
			console.log(error.error.message);
			this.showErrorMessage(error.error.message);
		}
	)
  }

}
