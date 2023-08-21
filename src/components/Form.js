import React, { ReactDOM, Component } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { algoAddress: ""};
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "algoAddress", ...this.state })
      })
        .then(() => window.location = window.location + "thanks")
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { algoAddress} = this.state;
      return (
        <div>
        <form 
        action="thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}>
          <p>
          <input type="hidden" name="form-name" value="algoAddress" />
            <label>
            <input type="text" className="algoAddress-input" placeholder="3 Your Algo Address" name="algoAddress" value={algoAddress} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button className="KeyCkeckStyle form-check" type="submit">4 Send</button>
          </p>
        </form>
        </div>
      );
    }
  }

  export default Form