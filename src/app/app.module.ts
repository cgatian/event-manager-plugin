import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HammerExtensionPlugin } from './hammer-event-extension/hammer-extensions.plugin';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: EVENT_MANAGER_PLUGINS, useClass: HammerExtensionPlugin, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
