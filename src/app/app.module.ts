import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeSearchComponent } from './screens/poke-search/poke-search.component';
import { PokeDashboardComponent } from './screens/poke-dashboard/poke-dashboard.component';
import { PokeDescriptionCardComponent } from './components/poke-description-card/poke-description-card.component';
import { PokeSkillsCardComponent } from './components/poke-skills-card/poke-skills-card.component';
import { PokeEvolutionCardComponent } from './components/poke-evolution-card/poke-evolution-card.component';
import { app_routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeGridCardComponent } from './components/poke-grid-card/poke-grid-card.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PokeEvoCardComponent } from './components/poke-evo-card/poke-evo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeSearchComponent,
    PokeDashboardComponent,
    PokeDescriptionCardComponent,
    PokeSkillsCardComponent,
    PokeEvolutionCardComponent,
    PokeCardComponent,
    PokeGridCardComponent,
    NavBarComponent,
    PokeEvoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
