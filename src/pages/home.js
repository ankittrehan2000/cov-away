import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Link } from "react-router-dom";
import React from "react";
require('dotenv').config()

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(/background.jpeg)`,
          height: "100vh",
          width: "100vw",
        }}
        className="justify-content-center d-flex"
      >
        <div className="col-10" style={{ height: "100vh" }}>
          <div className="col text-center">
            <h1 className="">Cov-away</h1>
            <h4>To help you with your covid getaway</h4>
          </div>
          <div className="row justify-content-center align-self-center">
            <div className="col-12 my-5">
              <InputGroup
                size="lg"
                class="my-3 mx-5"
                onChange={(e) => this.setState({ location: e.target.value })}
              >
                <FormControl placeholder="Enter your current state or the state you wish to visit"></FormControl>
              </InputGroup>
            </div>
            <Link
              className="btn btn-info mr-3 rounded-top rounded-bottom"
              to={{
                pathname: "/covid-data",
                userLocation: this.state.location,
              }}
            >
              Show me places
            </Link>
            <Link
              className="btn btn-info ml-3 rounded-top rounded-bottom"
              to={{
                pathname: "/vacafy-my-home",
                userLocation: this.state.location,
              }}
            >
              Show me what I should buy
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
