import React, { FunctionComponent } from 'react';

export type PlayerProps = {
  id: number,
  fullName: string,
  position: string,
  team: string,
  percentOwned: number,
  percentStarted: number
}

export const Player: FunctionComponent<PlayerProps> = (p: PlayerProps) => <p>{p.fullName} - {p.team}</p>
