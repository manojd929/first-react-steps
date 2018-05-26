import React, { Component, Fragment } from 'react';

const Temp1 = () => {
  return (
    <Fragment>
      <div>Hello</div>
      <div>World</div>
    </Fragment>
  );
};

/* React 16.2
const Temp2 = () => {
  return (
    <>
      <div>Hello</div>
      <div>World</div>
    </>
  );
};
*/

const Temp3 = (props) => {
  return (
    <Fragment>
      {
        props.grettings === "Hi" ?
          <Fragment>props.greetings</Fragment>
          : props.greetings
      }
    </Fragment>
  );
};

class FragmentExample extends Component {
  render() {
    return (
      <div>
        <h1>Fragments</h1>
        <Temp1 />
        <Temp3 greetings="Hi" />
      </div>
    );
  }
}

export default FragmentExample;