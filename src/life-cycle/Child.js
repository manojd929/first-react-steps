import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super();
    console.log('----- Child: Constructor');
  }

  componentWillMount() {
    console.log('----- Child: ComponentWillMount');
  }

  componentDidMount() {
    console.log('----- Child: ComponentDidMount');
  }

  componentWillReceiveProps() {
    console.log('----- Child: ComponentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('----- Child: ShouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('----- Child: ComponentWillUnmount');
  }

  componentWillUpdate() {
    console.log('----- Child: ComponentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('----- Child: ComponentDidUpdate');
  }

  render() {
    return (
      <div>
        Child: {this.props.name}
      </div>
    );
  }
}

export default Child;
