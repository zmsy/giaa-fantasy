import React, { type FunctionComponent } from "react";

export type TeamProps = {
  id: number;
  espnId: number;
  name: string;
  abbrev: string;
  divisionId: string;
  logo: string;
  gamesBack: number;
  wins: number;
  losses: number;
  ties: number;
  acquisitions: number;
  drops: number;
  trades: number;
  moveToActive: number;
  moveToIr: number;
  firstName: string;
  lastName: string;
};

export const Team: FunctionComponent<TeamProps> = (t: TeamProps) => (
  <li>
    {t.name} - {t.abbrev} - Wins: {t.wins}, Losses: {t.losses}, Ties {t.ties}
  </li>
);
