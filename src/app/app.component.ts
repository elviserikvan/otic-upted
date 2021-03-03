import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Aplicaciòn de la oficina TIC';
  loggedUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
	/*
	this.userService.user().subscribe(
		data => {
			this.loggedUser = data;
		},
		error => {
			console.log(error);
			this.loggedUser = null;
		}
	)
       */

  }
}
