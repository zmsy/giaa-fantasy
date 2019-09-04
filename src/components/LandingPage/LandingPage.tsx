import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Player, PlayerProps } from './Player';

interface LandingPageProps { }

interface LandingPageState {
  playerList: Array<PlayerProps>
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      playerList: new Array<PlayerProps>()
    }
  }

  componentWillMount() {
    console.log("Component mounted successfully!");
    this.getPlayers(12);
  }

  async getPlayers(playerId: number) {
    let response = await fetch("http://localhost:8000/api/players/" + playerId)
    let data = await response.json();
    let player = data.data as PlayerProps;
    let newPlayerList = new Array<PlayerProps>();
    newPlayerList.push(player);
    this.setState({ playerList: newPlayerList });
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
      </Jumbotron>
    );
  }
}

export default LandingPage;
