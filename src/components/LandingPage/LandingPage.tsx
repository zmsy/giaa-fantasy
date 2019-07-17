import React from 'react';
import PlayerProps from './Player'
import { Jumbotron } from 'react-bootstrap';

type LandingPageProps = {
  players: number
  playerList: typeof PlayerProps[]
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
      </Jumbotron>
    );
  }
}

export default LandingPage;
