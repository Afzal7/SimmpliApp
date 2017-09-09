import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


import { HomePage } from '../home/home';
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
	user;
  constructor(
  	public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthServiceProvider, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    if(this.user){
    	this.navCtrl.setRoot(HomePage);
    }
  }

  login(){
  	this.authService.login(this.credentials).subscribe(
  		data => {
  			console.log(data);	
  			if(data.success == true){
  				localStorage.setItem('currentuser', JSON.stringify(data));
  				this.navCtrl.setRoot(HomePage);
  			}
	    },
      error => {
        
      });
  }

}
