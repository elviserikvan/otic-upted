import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders =  {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_api_url: string = environment.user_api_url;

  constructor(private _http: HttpClient) { }

  login(data: any) {
	return this._http.post(`${this.user_api_url}/login`, data,  {
		observe: 'body',
		withCredentials: true,
		headers: new HttpHeaders().append('Content-Type', 'application/json')
	});
  }

  logout() {
	return this._http.get(`${this.user_api_url}/logout`, {
		observe: 'body',
		withCredentials: true,
		headers: new HttpHeaders().append('Content-Type', 'application/json')
	});
  }

  register(data: any) {
	return this._http.post(`${this.user_api_url}/register`, data,  httpHeaders);
  }

  user() {
	return this._http.get(`${this.user_api_url}/user`, {
		observe: 'body',
		withCredentials: true,
		headers: new HttpHeaders().append('Content-Type', 'application/json')
	});
  }

}
