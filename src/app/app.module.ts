import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionParentComponent } from './componentInteractionComponents/component-interaction-parent/component-interaction-parent.component';
import { ComponentInteractionChildComponent } from './componentInteractionComponents/component-interaction-child/component-interaction-child.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { DirectivesComponent } from './directives/directives.component';
import { AttributeDirectiveWithInputDirective } from './attribute-directive-with-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComponentInteractionComponent,
    ComponentInteractionParentComponent,
    ComponentInteractionChildComponent,
    AttributeDirectiveDirective,
    DirectivesComponent,
    AttributeDirectiveWithInputDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
