import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Output() exitForm: EventEmitter<any> = new EventEmitter();


  // Fields of the form
  file: any;
  title: string;
  amount: number;
  location: string;
  description: string;

  // Validation
  titleClass = { 'is-invalid': false }
  titleMessage: string;

  locationClass = { 'is-invalid': false }
  locationMessage: string;

  amountClass = { 'is-invalid': false }
  amountMessage: string;

  error: any[] = [];

  constructor(private itemService: ItemService) {
 	
  }

  ngOnInit(): void {
  }

  isBlank(str) {
	      return (!str || /^\s*$/.test(str));
  }

  resetForm() {
	this.title = '';
	this.amount = 0; 
	this.location = '';
	this.description = ''
  }

  onSubmit() {
	  // Validate title
	  if (this.isBlank(this.title)) {
		this.titleMessage = 'Este campo es necesario';
		this.titleClass = { 'is-invalid': true }	
		this.error.push('title');
	  }else {
		this.titleClass = { 'is-invalid': false }	
	  }

	  if (this.isBlank(this.location)) {
		this.locationMessage = 'Este campo es necesario';
		this.locationClass = { 'is-invalid': true }	
		this.error.push('location');
	  }else {
		this.locationClass = { 'is-invalid': false }	
	  }

	  if (this.isBlank(this.amount)) {
		this.amountMessage = 'Este campo es necesario';
		this.amountClass = { 'is-invalid': true }	
		this.error.push('amount');
	  }else {
		this.amountClass = { 'is-invalid': false }	
	  }

	 // Check for errors
	 if(this.error.length > 0) {

	 	this.error = [];

	 }else {
		// If there's description use the description, if not, then just use an empty string
		this.description = this.description ? this.description : '';

		let data = {
			title: this.title,
			amount: this.amount,
			location: this.location,
			description: this.description
		}


		this.itemService.addItem(data);

		this.resetForm();
	 }

  }

  onExit(e) {
	e.preventDefault();
	this.exitForm.emit();
  }

}
