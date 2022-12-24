import React from 'react';

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
      <div>Latitude: {this.state.lat}</div>
    ) : (
      <div>{this.state.errorMessage}</div>
    );
  }
}

export default App;
