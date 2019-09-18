import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Player, PlayerProps } from './Player';
import { TeamProps, Team } from './Team';

interface LandingPageProps { }

interface LandingPageState {
  playerList: Array<PlayerProps>,
  teamList: Array<TeamProps>
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

  constructor(props: any) {
    super(props);
    this.state = this.createState();
  }

  componentWillMount() {
    console.log("Component mounted successfully!");
    this.getPlayers(12);
  }

  /**
   * Create a new state for the LandingPage, so that this can be instantiated
   * easily when 
   */
  createState = function () {
    return {
      playerList: new Array<PlayerProps>(),
      teamList: new Array<TeamProps>()
    }
  }

  async getPlayers(playerId: number) {
    let newState = this.createState();

    // get all of the information about this player
    let response = await fetch("http://localhost:8000/api/players/" + playerId)
    let data = await response.json();
    let player = data.data as PlayerProps;
    newState.playerList.push(player);

    // get all of the information about the teams
    response = await fetch("http://localhost:8000/api/teams")
    data = await response.json();
    let teams = data.data as TeamProps[];
    teams.forEach(i => { newState.teamList.push(i); });
    newState.teamList.sort((a, b) => b.wins - a.wins);
    this.setState(newState);
  }

  render() {
    return (
      <Jumbotron fluid>
        <h1>Hello world!</h1>
        <ul>
          {this.state.playerList.map((i) =>
            <Player key={i.fullName} {...i} />
          )}
        </ul>
        <ul>
        {this.state.teamList.map((i) =>
            <Team key={i.name} {...i} />
          )}
        </ul>
      </Jumbotron>
    );
  }
}

export default LandingPage;
