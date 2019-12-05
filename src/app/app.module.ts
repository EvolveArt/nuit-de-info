import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatEtudiantComponent } from './chat-etudiant/chat-etudiant.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RessourcesComponent } from './ressources/ressources.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ChatboxComponent,
    ChatEtudiantComponent,
    AboutPageComponent,
    RessourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
