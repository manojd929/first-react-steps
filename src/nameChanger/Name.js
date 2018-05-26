import React, { Component } from 'react';

class Users extends Component {
  state = {
    name: 'Name',
  };

  changeNameAnon = (newName) => {
    this.setState({ name: newName });
  }

  changeNameUsingBind = (newName) => {
    this.setState({ name: newName });
  }

  updateName = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Name Changer</h1>
        <div>{this.state.name}</div>
        <button
          onClick={() => this.changeNameAnon('Awesome Name :(')}
        >
          change name using Anon
        </button>
        <button
          onClick={this.changeNameUsingBind.bind(this, 'Awesome Name :)')}
        >
          change name using Anon
        </button>
        <input
          type="text"
          onChange={this.updateName}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default Users;
