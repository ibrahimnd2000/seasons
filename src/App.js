import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: '',
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  render() {
    return this.state.errorMessage === '' ? (
      <SeasonDisplay lat={this.state.lat} />
    ) : (
      <div>Error: {this.state.errorMessage}</div>
    );
  }
}

export default App;
