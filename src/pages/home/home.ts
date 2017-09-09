import { Component } from '@angular/core';


import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SimmpliServiceProvider } from '../../providers/simmpli-service/simmpli-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	user;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthServiceProvider, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public simmpliService: SimmpliServiceProvider
  	) {
  	this.user = JSON.parse(localStorage.getItem('currentuser'));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.user = JSON.parse(localStorage.getItem('currentuser'));
    if(this.user){
    	console.log(this.user);
    	this.loadUserTimeline(this.user)
    }
  }

  public loadUserTimeline(usr){
  	this.simmpliService.userTimeline(usr).subscribe(
      data =>{
        console.log(data)
      });
  }

  addNewTarget(){
  	
  }

}
