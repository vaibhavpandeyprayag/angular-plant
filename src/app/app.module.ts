import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { EventEmitterParentComponent } from './eventEmitterComponents/event-emitter-parent/event-emitter-parent.component';
import { EventEmitterChildComponent } from './eventEmitterComponents/event-emitter-child/event-emitter-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventEmitterComponent,
    EventEmitterParentComponent,
    EventEmitterChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
