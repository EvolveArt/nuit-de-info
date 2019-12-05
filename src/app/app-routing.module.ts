import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ChatEtudiantComponent } from "./chat-etudiant/chat-etudiant.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { RessourcesComponent } from "./ressources/ressources.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "chat", component: ChatEtudiantComponent },
  { path: "about", component: AboutPageComponent },
  { path: "ressources", component: RessourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
