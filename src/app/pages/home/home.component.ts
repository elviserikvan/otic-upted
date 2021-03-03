import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedUser: any;
  overview: number;
  editing: any;
  item: any;

  constructor(private itemService: ItemService, private userService: UserService) { }

  async ngOnInit(): Promise<any> {
	  this.overview = 1;
	  this.item = null;

	  try {
		let loggedUser = await this.userService.user().toPromise();	  
		this.loggedUser = loggedUser;
		console.log(loggedUser);
	  } catch(e) {
	  	console.log('Error');
		this.loggedUser = false;
	  }

  }

  onExit() {
	this.overview = 1;
  }

  onAdd() {
	this.overview = 2;
  }

  onSelect(item){
	this.item = item;
  }

  onEdit(item) {
	this.overview = 3;
	this.editing = item;
  }

  async onDelete(item) {
	let response = await this.itemService.deleteItem(item);
	if(response.success) {
		location.reload();	
	}
  }
}
