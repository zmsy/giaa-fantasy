import React, { FunctionComponent } from 'react';

export type PlayerProps = {
  id: number,
  fullName: string,
  position: string,
  team: number,
  percentOwned: number,
  percentStarted: number
}

export const Player: FunctionComponent<PlayerProps> = (p: PlayerProps) => <li>{p.fullName} - {p.team}</li>
