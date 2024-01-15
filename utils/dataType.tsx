export interface Record {
  id: number;
  firstTeam: string;
  firstTeamWin: number;
  secondTeam: string;
  secondTeamWin: number;
  state: string;
  startDate: string;
  startTime: string;
}

export interface styledInterface {
  styledInterface: {
    win: string;
  };
}

export interface userList {
  id: number;
  highTier: string;
  level: number;
  loss: number;
  name: string;
  rate: string;
  tier: string;
  win: number;
}
