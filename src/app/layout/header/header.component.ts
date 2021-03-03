import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedUser: any;
  //@Input() loggedUser: any;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService, private _router: Router) { }

  async ngOnInit(): Promise<any> {
	  try {
		let user = await this.userService.user().toPromise();
		this.loggedUser = user;
	  }catch (e) {
		this.loggedUser = false;
	  }
	
	  console.log(this.loggedUser);
  }

  onAdd() {
	this.addItem.emit()
  }

  onLogout() {
	this.userService.logout().subscribe(
		data => {
			this._router.navigate(['/']);
			window.location.reload();
		},
		error => {
			console.log(error);
		}
	);
  }

}
