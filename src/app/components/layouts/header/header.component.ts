import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';
import { LeagueTableComponent } from '../../pages/league-table/league-table.component';
import { MatchTableComponent } from '../../pages/match-table/match-table.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matchRequest:TableDataService) { }

  ngOnInit(): void {
  }

  generateRandomMatch() {
    this.matchRequest.requestRandomMatch().subscribe();
  }

}
