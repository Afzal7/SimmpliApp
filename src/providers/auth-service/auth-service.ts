import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {


	currentUser;
	baseUrl: String;
  isLoggedin: boolean;
  AuthToken;
  public token: any;
  user;
  constructor(public http: Http) {
  	this.baseUrl = 'http://localhost:8100';
    console.log('Hello AuthServiceProvider Provider');
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    console.log(this.user);
  }

  

  public login(credentials){
  	return this.http.post(this.baseUrl+'/api/v1/sessions/', credentials).map(res => res.json());
  }


   public logout(){
  	return this.http.delete(this.baseUrl+'/api/v1/sessions/'+this.user.user.token.token).map(res => res.json());

  }


}
