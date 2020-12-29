export interface MatchDate {
    day: number;
    month: number;
    year: number;
}

export interface MatchData {
    teamOne: string;
    teamTwo: string;
    teamOneGoals: number;
    teamTwoGoals: number;
    matchDate: MatchDate;
    matchLocation: string;
}