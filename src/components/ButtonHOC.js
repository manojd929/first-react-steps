import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper';

const ButtonHOC = (props) => {
  return (
    <button style={props.styles}>I am Button</button>
  );
}

export default stylesWrapper(ButtonHOC);
