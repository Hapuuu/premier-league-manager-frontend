import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';
import { PremierLeagueData } from 'src/app/models/PremierLeagueData';


@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  leagueTableData:PremierLeagueData[];
  displayedColumns: string[] = ['name', 'points', 'matchesPlayed', 'wins', 'defeats', 'draws', 'goalsScored', 'goalsReceived', 'goalDifference'];

  constructor(private tableData:TableDataService) { }

  ngOnInit(): void {
    // subscribing to the getleagueData method of the API and assigning it to leagueTableData
    this.tableData.getLeagueData().subscribe(data => {
      this.leagueTableData = data;
      console.log(this.leagueTableData);
    });
  }

  sortByGoalsScored() {
    console.log("Clicked");
    // sorting the leagueTableData according to the Goals Scored and filtering it
    this.leagueTableData.sort((a,b) => { return b.noOfGoalsScored - a.noOfGoalsScored });
    this.leagueTableData = this.leagueTableData.filter(sorted => sorted);
    //console.log(this.leagueTableData);
  }

  sortByWins() {
    // sorting the leagueTableData according to the wins and filtering it
    this.leagueTableData.sort((a,b) => { return b.noOfWins - a.noOfWins });
    this.leagueTableData = this.leagueTableData.filter(sorted => sorted);
  }
  

}
