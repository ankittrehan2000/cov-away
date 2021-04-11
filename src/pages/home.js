import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import React from 'react';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      location: ''
    }
  }

  render(){
  return(
    <div className="row justify-content-center">
    <div className="col-8 col-offset-2 my-5">
    <InputGroup size="lg" class="my-3 mx-5" onChange={(e) => this.setState({location: e.target.value})}>
      <FormControl placeholder="Enter your current county or the county you wish to visit">
      </FormControl>
      <InputGroup.Append>
        <Link className="btn btn-info ml-2 rounded-top rounded-bottom" to={{pathname: "/covid-data", userLocation: this.state.location }} >Show me places</Link>
      </InputGroup.Append>
    </InputGroup>
    <Link className="btn btn-info ml-2 rounded-top rounded-bottom" to={{pathname: "/vacafy-my-home", userLocation: this.state.location }} >Show me what i need</Link>
    </div>
    </div>
  )}
}
