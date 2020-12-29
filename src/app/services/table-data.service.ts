import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PremierLeagueData } from '../models/PremierLeagueData';
import { MatchData } from '../models/MatchData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  backendUrl:string = "http://localhost:4200/api/"
  leagueDataUrl:string = `${this.backendUrl}getPremierLeagueData`
  matchDataUrl:string = `${this.backendUrl}getMatchData`
  generateMatchUrl:string = `${this.backendUrl}generateRandomMatch`

  constructor(private http:HttpClient) { }

  getLeagueData():Observable<PremierLeagueData[]> {
    return this.http.get<PremierLeagueData[]>(this.leagueDataUrl);
  }

  getMatchData():Observable<MatchData[]> {
    return this.http.get<MatchData[]>(this.matchDataUrl);
  }

  requestRandomMatch() {
    return this.http.get(this.generateMatchUrl);
  }
  
}
