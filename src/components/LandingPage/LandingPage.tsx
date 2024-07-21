import React, { useState } from "react";
import { Player, type PlayerProps } from "./Player";
import { Team, type TeamProps } from "./Team";

export function LandingPage() {
  const [playerList] = useState<Array<PlayerProps>>([]);
  const [teamList] = useState<Array<TeamProps>>([]);

  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {playerList.map((i) => (
          <Player key={i.fullName} {...i} />
        ))}
      </ul>
      <ul>
        {teamList.map((i) => (
          <Team key={i.name} {...i} />
        ))}
      </ul>
    </div>
  );
}
