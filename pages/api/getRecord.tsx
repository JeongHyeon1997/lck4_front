import { Record } from "@/utils/dataType";

export const getRecord = (year: Number, month: Number): Record[] => {
  return [
    {
      firstTeam: "Team 감자",
      firstTeamWin: 0,
      secondTeam: "Team 정현",
      secondTeamWin: 0,
      state: "진행",
      startDate: "01.01(월)",
      startTime: "17:00",
    },
    {
      firstTeam: "Team 감자",
      firstTeamWin: 1,
      secondTeam: "Team 정현",
      secondTeamWin: 0,
      state: "종료",
      startDate: "01.02(월)",
      startTime: "17:00",
    },
    {
      firstTeam: "Team 감자",
      firstTeamWin: 0,
      secondTeam: "Team 정현",
      secondTeamWin: 1,
      state: "예정",
      startDate: "01.02(월)",
      startTime: "17:00",
    },
    {
      firstTeam: "Team 감자",
      firstTeamWin: 2,
      secondTeam: "Team 정현",
      secondTeamWin: 1,
      state: "종료",
      startDate: "02.02(월)",
      startTime: "17:00",
    },
    {
      firstTeam: "Team 감자",
      firstTeamWin: 0,
      secondTeam: "Team 정현",
      secondTeamWin: 0,
      state: "종료",
      startDate: "02.02(월)",
      startTime: "17:00",
    },
  ];
};
