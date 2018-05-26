import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  state = {
    users: [
      {
        name: 'John',
        age: 20,
      },
      {
        name: 'Johnny',
        age: 20,
      },
      {
        name: 'Janardhan',
        age: 20,
      },
    ],
    title: 'Users List',
  };

  makeMeYoung = () => {
    const newUsers = this.state.users.map((user) => {
      const temp = user;
      temp.age -= 1;
      return temp;
    });
    this.setState({ users: newUsers });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <br />
        <button onClick={this.makeMeYoung}>Make us younger</button>
        <br />
        {
          this.state.users.map((user, index) => {
            return <User key={`user-${index}`} age={user.age}>{user.name}</User>
          })
        }
      </div>
    );
  }
}

export default Users;
