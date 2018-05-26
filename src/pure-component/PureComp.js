import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      val: 1,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ val: 1 });
    }, 2000);
  }
  /*
    Avoids rerender
    if PureComponent should not be there, to avoid redundancy

    shouldComponentUpdate(nextProps, nextState) {
      console.log('nextProps ', nextProps.val);
      console.log('this.props ', this.props.val);
      if (this.props.val !== nextProps.val) {
        return true;
      }
      return false;
    }
   */

   render() {
     return (
      <div>
        <h1>Pure Component</h1>
        <div>
          value: {this.state.val}
        </div>
      </div>
     );
   }
}

export default PureComp;