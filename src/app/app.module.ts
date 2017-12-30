import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

const config: FirebaseAppConfig = {
  apiKey: "AIzaSyDNP4-DZ4QenTZho4W4pAWvKgVsJZoO55g",
  authDomain: "motivator-851b8.firebaseapp.com",
  databaseURL: "https://motivator-851b8.firebaseio.com",
  projectId: "motivator-851b8",
  storageBucket: "motivator-851b8.appspot.com",
  messagingSenderId: "610805890571"
};


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
