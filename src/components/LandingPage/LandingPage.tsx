import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Player, PlayerProps }  from './Player';

// /Users/zach/x/giaa-fantasy/src/components/LandingPage/Player.tsx

type LandingPageProps = {
  players: number
  playerList: PlayerProps[]
}

class LandingPage extends React.Component<LandingPageProps> {

  static defaultProps = {
    players: 0,
    playerList: []
  }

  componentDidMount() {
    console.log("Component mounted successfully!");
  }

  render() {
    return (
      <Jumbotron fluid>
        <h1>Hello world!</h1>
        this.props.playerList.forEach(element => {
          // <Player />
        });
      </Jumbotron>
    );
  }
}

export default LandingPage;
