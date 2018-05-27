import React from 'react';
import commonStyles from '../HOC/styles/commonStyles';

const Button = (props) => {
  let _styles = { ...commonStyles.default };
  if (props.disable) {
    _styles = { _styles, ...commonStyles.disable };
  }
  return (
    <button style={_styles}>I am Button</button>
  );
}

export default Button;
