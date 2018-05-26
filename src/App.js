import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Name from './nameChanger/Name';
import FragmentExample from './fragments/FragmentExample';
import Parent from './life-cycle/Parent';
import PureComp from './pure-component/PureComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="Users" />
        <br />
        <Name />
        <br />
        <FragmentExample />
        <br />
        <Parent />
        <br />
        <PureComp />
      </div>
    );
  }
}

export default App;
