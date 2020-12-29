import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  backendUrl:string = "http://localhost:9000/api/"
  leagueDataUrl:string = `${this.backendUrl}/getPremierLeagueData`
  matchDataUrl:string = `${this.backendUrl}/getMatchData`
  generateMatchUrl:string = `${this.backendUrl}/generateRandomMatch`

  constructor(private http:HttpClient) { }

  getLeagueData() {
    return this.http.get(this.leagueDataUrl)
  }

  getMatchData() {
    return this.http.get(this.matchDataUrl)
  }

  requestRandomMatch() {
    return this.http.get(this.generateMatchUrl)
  }
  
}
