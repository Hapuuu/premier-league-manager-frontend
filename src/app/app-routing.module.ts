import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueTableComponent } from '../app/components/pages/league-table/league-table.component'
import { MatchTableComponent } from '../app/components/pages/match-table/match-table.component'


const routes: Routes = [
  { path: '', component: LeagueTableComponent },
  { path: 'matchTable', component: MatchTableComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
