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

export interface Match {
  id: number;
  fristTeamUserName: string;
  fristTeamUserChampion: string;
  fristTeamUserMVP: string;
  secondTeamUserName: string;
  secondTeamChampion: string;
  secondTeamUserMVP: string;
  Line: string;
  CreateDate: string;
}

export interface styledInterface {
  styledInterface: {
    win?: string;
    mvp?: string;
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
