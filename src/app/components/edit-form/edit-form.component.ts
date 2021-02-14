import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Input() editing: any;
  @Output() exitForm: EventEmitter<any> = new EventEmitter();

  success_message: boolean = false;

  title: string;
  location: string;
  amount: number;
  description: string;

  local: any;

  // Validation data
  titleClass = { 'is-invalid': false }
  titleMessage: string;

  locationClass = { 'is-invalid': false }
  locationMessage: string;

  amountClass = { 'is-invalid': false }
  amountMessage: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
	  this.local = {
		  title: this.editing.title,
		  amount: this.editing.amount,
		  location: this.editing.location,
		  description: this.editing.description
	  }
  }

  async onSubmit() {
	//this.local.id = this.editing._id
	let edited = <any> await this.itemService.editItem(this.local, this.editing._id)
	if(!edited.error)
		this.success_message = true
  }

  onExit(e) {
	e.preventDefault();
	this.exitForm.emit();
  }
}
