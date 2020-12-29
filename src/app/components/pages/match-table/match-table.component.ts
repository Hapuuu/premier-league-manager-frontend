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

  constructor(private tableData:TableDataService) { }

  ngOnInit(): void {
    this.tableData.getMatchData().subscribe(data => {
      this.matchTableData = data;
      console.log(this.matchTableData);
    });
  }

}
