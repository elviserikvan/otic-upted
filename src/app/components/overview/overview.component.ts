import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() selected: any;
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  @Output() editItem: EventEmitter<any> = new EventEmitter();
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  private _loggedUser;

  element: any;
  constructor(private itemService: ItemService) {
	  this.selected = null
  }

  ngOnInit(): void {
	 console.log(this.loggedUser);
  }

  get loggedUser() {
  	return this._loggedUser;
  }   
  
  @Input()
  set loggedUser(val: any) {
	console.log(`Previus items: ${this._loggedUser}`);
	console.log(`Current items: ${val}`);

	this._loggedUser = val;
  	
  }

  onAdd() {
	this.addItem.emit();
  }

  onEdit() {
	this.editItem.emit(this.selected);
  }

  onDelete() {
	this.deleteItem.emit(this.selected);
  }
}
