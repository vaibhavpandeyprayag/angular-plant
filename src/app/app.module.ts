import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionParentComponent } from './componentInteractionComponents/component-interaction-parent/component-interaction-parent.component';
import { ComponentInteractionChildComponent } from './componentInteractionComponents/component-interaction-child/component-interaction-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComponentInteractionComponent,
    ComponentInteractionParentComponent,
    ComponentInteractionChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
