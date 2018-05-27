import React from 'react';

const InputField = (props) => {
  return (
    <input type="text" ref={props.inputRef} />
  );
}

const Form1 = (props) => {
  let inputRef = '';

  const handleClick = () => {
    inputRef.focus();
  }

  return (
    <div>
      <h1>Ref: Form1</h1>
      <div>
        <span>First Name</span>
        <InputField inputRef={(input) => { inputRef = input }} />
      </div>
      <br />
      <div>  
        <input
          type="button"
          value="Focus Input"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Form1;
