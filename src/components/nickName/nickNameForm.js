import React, { Component } from "react";
import "./nickNameForm.css";

export default class NameForm extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      userName: this.state.value,
      id: this.props.numberOfUsers + 1
    };
    this.props.setUserName(user);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="input"
            type="text"
            placeholder="unknown user"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  }
}
