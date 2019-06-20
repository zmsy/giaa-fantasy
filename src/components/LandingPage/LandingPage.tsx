import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class LandingPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

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
