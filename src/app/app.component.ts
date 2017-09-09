import {Component, ViewChild} from '@angular/core';
import { Platform, MenuController, Nav, AlertController, LoadingController, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';


import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any}>
  loginPage: Array<{title: string, component: any}>
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public authService: AuthServiceProvider
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.loginPage = [

      { title: 'Login', component: LoginPage },
    ];
    this.pages = [

      { title: 'Home', component: HomePage },
      { title: 'About-Us', component: AboutPage },
      { title: 'Contact-Us', component: ContactPage }

    ];
  }


  openPage(page) {

    this.nav.setRoot(page.component);
  }


  logout(){
    console.log(23123123);
    this.authService.logout().subscribe(
      data => {
        console.log(data);
        if (data.success == true) {   
          window.localStorage.clear(); 
        } else {
        }
      },
      error => {
        // this.showAlert('Error', error);
      });
  }
}
