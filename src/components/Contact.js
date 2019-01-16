import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form action="">
          <label htmlFor="name">
            Name:
            <input onChange={this.handleChange} type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email:
            <input onChange={this.handleChange} type="text" id="email" />
          </label>
          <label htmlFor="message">
            Message:
            <textarea onChange={this.handleChange} id="message" />
          </label>
        </form>
      </div>
    );
  }
}
