import { Component, OnInit } from '@angular/core';
import { MatchData } from 'src/app/models/MatchData';
import { TableDataService } from 'src/app/services/table-data.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {
  matchTableData:MatchData[];
  displayedColumns: string[] = ['team1', 'team2', 'teamOneGoals', 'teamTwoGoals', 'matchDate', 'location'];
  searchKey:string;
  initialData: MatchData[]; // this variable was created so that the search is done on the initial list not on the searched list
  constructor(private tableData:TableDataService) { }

  ngOnInit(): void {
    // subscribing to the getMatchData method of the API and assigning it to matchTableData
    this.tableData.getMatchData().subscribe(data => {
      // this sorts according to the date of match
      data.sort((a, b)=>{return ( a.matchDate.year - b.matchDate.year || a.matchDate.month - b.matchDate.month || a.matchDate.day - b.matchDate.day )});
      this.matchTableData = data;
      this.initialData = data;
      console.log(this.matchTableData);
    });
  }

  search() {
    console.log("search is called")
    console.log(this.searchKey);
    // when the search bar is empty when search button is pressed the whole list is displayed
    if(this.searchKey == "") {
      this.ngOnInit();
    }
    else{
      // filtering the matches by comparing the input and the dates of the matches
      this.matchTableData = this.initialData.filter(result => {
        let match = result.matchDate; // path to the matchDate Object is shortened for convenience in the next line
        let searchDate:string = `${match.day.toString()}/${match.month.toString()}/${match.year.toString()}`;
        return searchDate.match(this.searchKey);
      });
    }

    
  }
  
  // this method is run when the keyboard input becomes nothing (Works without having to press search)
  returnAllMatches() {
    if(this.searchKey == "") {
      this.ngOnInit();
    }
  }

}
