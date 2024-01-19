import React from 'react';
import Student from './Student';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    };

    this.update = () => {
      this.setState({ show: !this.state.show });
    };
  }

  render() {
    return (
      <div>
          {this.state.show ? <Student /> : <h1>Student component is removed</h1>}
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}

export default User;
