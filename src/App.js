import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.long}</div>
      </div>
    );
  }
}

export default App;
