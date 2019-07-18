import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { /*Player,*/ PlayerProps }  from './Player';

interface LandingPageProps {}

interface LandingPageState {
  players: number,
  playerList: Array<PlayerProps>
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {

  constructor(props: any) {
    super(props);
    this.state = {
      players: 0,
      playerList: new Array<PlayerProps>()
    }
  }

  componentDidMount() {
    console.log("Component mounted successfully!");
    this.getPlayers(12);
  }

  async getPlayers(playerId: number) {
    let response = await fetch("http://localhost:8000/api/players/" + playerId)
    let data = await response.json();
    let player = data.data as PlayerProps;
    this.state.playerList.push(player);
    console.log(data);
    return data;
  }

  render() {
    return (
      <Jumbotron fluid>
        <h1>Hello world!</h1>
        {this.state.playerList.forEach(element => {
          // <Player />
        })}
      </Jumbotron>
    );
  }
}

export default LandingPage;
