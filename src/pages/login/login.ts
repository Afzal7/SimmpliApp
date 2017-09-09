import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	credentials = { email: '', password: '' };
  constructor(
  	public navCtrl: NavController, 
  	private authService: AuthServiceProvider, 
  	public navParams: NavParams
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
  	this.authService.login(this.credentials).subscribe(
  		data => {
  			console.log(data);
	   
	    },
      error => {
        
      });
  }

}
