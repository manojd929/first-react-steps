import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Name from './nameChanger/Name';
import FragmentExample from './fragments/FragmentExample';
import Parent from './life-cycle/Parent';
import PureComp from './pure-component/PureComp';
import ButtonHOC from './components/ButtonHOC';
import Button from './components/Button';
import Form1 from './RefExample/Form1';
import Form2 from './RefExample/Form2';

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
        <br />
        <h1>HOC</h1>
        <ButtonHOC disable />
        <ButtonHOC /> 
        <Button disable/>
        <br />
        <Form1 />
        <br />
        <Form2 />
      </div>
    );
  }
}

export default App;
