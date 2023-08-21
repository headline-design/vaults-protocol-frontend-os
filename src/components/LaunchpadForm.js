import React, { ReactDOM, Component } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class LaunchpadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { algoAddress: ""};
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "launchpad", ...this.state })
      })
        .then(() => window.location = window.location + "/thanks")
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { firstName, lastName, email, projectName, missionObjective, additionalComments} = this.state;
      return (
        <div class="CardContainer">
        <form 
        action="thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}>
          <p>
          <input type="hidden" name="form-name" value="launchpad" />
          </p>
    <div className="bx--row">
      <div className="Grid-module--column--1wV-c bx--col-md-4 bx--col-lg-5">
        <div className="bx--form-item">

          <input
            type="text"
            placeholder="First name"
            className="algoAddress-input launchpad-input"
            name="firstname"
            id="firstname"
            value={firstName} 
            onChange={this.handleChange}
            required=""
          />
        </div>
      </div>
      <div className="Grid-module--column--1wV-c bx--col-md-4 bx--col-lg-5">
        <div className="bx--form-item">

          <input
            type="text"
            placeholder="Last name"
            className="algoAddress-input launchpad-input"
            name="lastname"
            id="lastname"
            value={lastName} 
            onChange={this.handleChange}
            required=""
          />
        </div>
      </div>
    </div>
    <div className="bx--row">
      <div className="Grid-module--column--1wV-c bx--col-md-8 bx--col-lg-10">
        <div className="bx--form-item">

          <input
            type="email"
            placeholder="Email address"
            className="algoAddress-input launchpad-input"
            name="email"
            id="email"
            value={email} 
            onChange={this.handleChange}
            required=""
          />
        </div>
      </div>
    </div>
    <div className="bx--row">
      <div className="Grid-module--column--1wV-c bx--col-md-4 bx--col-lg-5">
        <div className="bx--form-item">

          <input
            type="text"
            placeholder="Project name"
            className="algoAddress-input launchpad-input"
            name="projectname"
            value={projectName} 
            onChange={this.handleChange}
            id="projectname"
          />
        </div>
      </div>
      <div className="Grid-module--column--1wV-c bx--col-md-4 bx--col-lg-5">
        <div className="bx--form-item">

          <input
            type="text"
            placeholder="Mission objective"
            className="algoAddress-input launchpad-input"
            name="missionobjective"
            value={missionObjective} 
            onChange={this.handleChange}
            id="missionobjective"
          />
        </div>
      </div>
    </div>
    
    <div className="bx--row">
      <div className="Grid-module--column--1wV-c bx--col-md-8 bx--col-lg-10">
        <div className="bx--form-item">

          <input
            type="text"
            placeholder="Referral/Additional comments"
            className="algoAddress-input launchpad-input"
            name="referral"
            value={additionalComments} 
            onChange={this.handleChange}
            id="referral"
          />
        </div>
      </div>
    </div>
    <div className="bx--row">
      <div className="Grid-module--column--1wV-c bx--col-md-4 bx--col-lg-5">
        <div className="bx--form-item">
        </div>
      </div>
    </div>
          <p>
            <button className="KeyCkeckStyle form-check" type="submit">Send</button>
          </p>
        </form>
        </div>
      );
    }
  }

  export default LaunchpadForm