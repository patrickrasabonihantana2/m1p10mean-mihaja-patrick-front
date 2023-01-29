import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalMessageComponent } from './compenents/message/global-message/global-message.component';
import { GlobalMessageService } from './services/global-message.service';

@NgModule({
  declarations: [
    AppComponent,
    GlobalMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GlobalMessageService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
