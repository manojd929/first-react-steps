import React, { Component, Fragment } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sample Name',
      renderChild: true,
    }
    console.log('Parent: Constructor');
  }

  componentWillMount() {
    console.log('Parent: ComponentWillMount');
  }
  
  componentDidMount() {
    console.log('Parent: ComponentDidMount');
  }
  
  componentWillReceiveProps() {
    console.log('Parent: ComponentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Parent: ShouldComponentUpdate');
    return true;
  }

  
  componentWillUpdate() {
    console.log('Parent: ComponentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('Parent: ComponentDidUpdate');
  }
  
  componentWillUnmount() {
    console.log('Parent: ComponentWillUnmount');
  }

  updateName = () => {
    this.setState({ name: 'New Name' });
  }

  mountChild = () => {
    this.setState({ renderChild: true });
  }

  unmountChild = () => {
    this.setState({ renderChild: false });
  }

  render() {
    return (
      <div>
        <h1>Life Cycle Hooks</h1>
        <h5>Check console</h5>
        {this.state.renderChild ?
          <Fragment>
            <Child name={this.state.name} />
            <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
          </Fragment> :
          <button onClick={this.mountChild.bind(this)}>Mount Child</button>
        }
        <br />
        <button onClick={this.updateName.bind(this)}>Change Name</button>
      </div>
    );
  }
}

export default Parent;
