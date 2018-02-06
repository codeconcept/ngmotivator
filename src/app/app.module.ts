import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

// firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// our custom components, services ...
import { QuotesService } from './quotes/services/quotes.service';
import { AuthService } from './authentication/services/auth.service';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './backend/create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';
import { QuoteComponent } from './quote/quote.component';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { LoginComponent } from './authentication/login/login.component';

// material design
import { MaterialModule } from './material.module';

const config: FirebaseAppConfig = {
  apiKey: "AIzaSyDNP4-DZ4QenTZho4W4pAWvKgVsJZoO55g",
  authDomain: "motivator-851b8.firebaseapp.com",
  databaseURL: "https://motivator-851b8.firebaseio.com",
  projectId: "motivator-851b8",
  storageBucket: "motivator-851b8.appspot.com",
  messagingSenderId: "610805890571"
};

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: QuotesComponent },
  { path: 'quote/:id', component: QuoteDetailsComponent },
  { path: 'admin', component: BackendHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent,
    QuoteComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    QuotesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
