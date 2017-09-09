import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SimmpliServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SimmpliServiceProvider {
	baseUrl;
  constructor(public http: Http) {
  	this.baseUrl = 'http://localhost:8100';
    console.log('Hello SimmpliServiceProvider Provider');
  }


  userTimeline(usr){
  	return this.http.post(this.baseUrl+'/api/v1/targets/get_targets', {profile_id: usr.user.current_profile_id, user_id: usr.user.id}).map(res => res.json());
  }

}
