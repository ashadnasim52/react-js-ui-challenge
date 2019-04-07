import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div>
        <input className type="text" placeholder="Enter Email Address" />
      </div>
    );
  }
}

export default Input;
