import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  invalid: boolean;
  registerForm: FormGroup = new FormGroup({
  	email: new FormControl(null, [Validators.required, Validators.email]),
  	username: new FormControl(null, [Validators.required]),
  	password: new FormControl(null, [Validators.required]),
  	password2: new FormControl(null, [Validators.required])
  });

  constructor(private userService: UserService, private _route: Router) { }

  async ngOnInit(): Promise<void> {
	  this.invalid = false;
	  let logged = await this.checkIfLoggedIn();
	  if(logged) {
	  	this._route.navigate(['/']);
	  }
  }

  onRegister() {
	  if(! this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.password2.value) ) {
		this.invalid = true;
	  	console.log("Invalid form");
		return;
	  }

	this.invalid = false;
	this.userService.register(this.registerForm.value).subscribe(
		data => {
			this._route.navigate(['login']);
		},
		error => {
			this.invalid = true;
			console.log(error);
		}
	)
  }

  async checkIfLoggedIn():Promise<boolean> {
 	
	try {
		await this.userService.user().toPromise();
		return true;
	}catch (e) {
		return false;	
	}
  }
}
