// Import necessary modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Assuming your root component is named AppComponent
import { SlickGridModule } from 'angular-slickgrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlickGridModule.forRoot() // Importing and initializing the SlickGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
