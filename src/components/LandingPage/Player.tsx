import React, { FunctionComponent } from 'react';

type PlayerProps = {
  id: number,
  fullName: string,
  position: string,
  team: string,
  percentOwned: number,
  percentStarted: number
}

const Player: FunctionComponent<PlayerProps> = (p: PlayerProps) => <p>{p.fullName} - {p.team}</p>

export default Player;
