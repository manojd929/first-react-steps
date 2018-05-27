import React, { Component } from 'react';

class Form2 extends Component {
  onKeyUp = (passed, e) => {
    if (e.keyCode === 13) {
      console.log(passed);
      switch(passed) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.submit.focus();
          break;
      }
    }
  }

  onSubmit = () => {
    alert(`${this.firstName.value} - ${this.lastName.value} - ${this.age.value}`);
  }

  render() {
    return (
      <div>
        <h1>Form2</h1>
        <div>
          <span>First Name</span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            ref={(input) => {this.firstName = input; }}
          />
          <br />
        </div>
        <div>
          <span>Last Name</span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            ref={(input) => {this.lastName = input; }}
          />
          <br />
        </div>
        <div>
          <span>Age</span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            ref={(input) => {this.age = input; }}
          />
          <br />
        </div>
        <div>
          <input
            type="submit"
            ref={(input) => { this.submit = input; }}
            onClick={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Form2;