import React, { Component } from 'react';
import DefaultLayout
 from '../layouts/DefaultLayout';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <DefaultLayout title="Home">
        <h3>Welcome to my-reactjs app!</h3>
      </DefaultLayout>
    );
  }
}

export default Home;
