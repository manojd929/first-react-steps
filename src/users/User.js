import React from 'react';

const User = (props) => {
  let age = props.age || 'NA';

  if (props.children) {
    return (
      <div>
        Name: {props.children} | Age: {age}
      </div>
    );
  }

  return (
    <div>
      Invalid Entry
    </div>
  );
}

export default User;
