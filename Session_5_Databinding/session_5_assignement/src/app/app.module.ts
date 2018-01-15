import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddComponent } from './odd/odd.component';
import { EveneComponent } from './evene/evene.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddComponent,
    EveneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
