import React from 'react';

const darkStyle = {
  backgroundColor: 'black',
  color: 'white'
};

const normalStyle = {
  backgroundColor: 'white',
  color: 'black'
};

const pinkStyle = {
  backgroundColor: 'pink',
  color: 'black'
};
const yellowStyle = {
  backgroundColor: 'yellow',
  color: 'black'
};
const blueStyle = {
  backgroundColor: 'blue',
  color: 'black'
};
const redStyle = {
  backgroundColor: 'red',
  color: 'black'
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: normalStyle,
    };
  }

  updateHandler = (value) => {
    this.setState({ style: value });
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1 style={{ backgroundColor: this.state.style.backgroundColor, color: this.state.style.color,height:'70vh' }}>
          Message Value: {this.state.style.backgroundColor}
        </h1>
        <button onClick={this.updateHandler.bind(this, normalStyle)}>normal</button>
        <button onClick={this.updateHandler.bind(this, darkStyle)}>dark</button>
        <button onClick={this.updateHandler.bind(this, pinkStyle)}>pink</button>
        <button onClick={this.updateHandler.bind(this, yellowStyle)}>yellow</button>
        <button onClick={this.updateHandler.bind(this, blueStyle)}>blue</button>
        <button onClick={this.updateHandler.bind(this, redStyle)}>red</button>

      </div>
    );
  }
}

export default App;
