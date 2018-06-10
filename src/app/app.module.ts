import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PipesModule } from './../pipes/pipes.module';
import { EventItemComponent } from './../components/index';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { EventsProvider } from '../providers/events/events';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'en'},
    EventsProvider
  ]
})
export class AppModule {}
