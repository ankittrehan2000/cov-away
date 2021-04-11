import React from 'react';
import getLocations from '../components/getLocations';
import getCovidData from '../components/getCovidData';
import processDataResponse from '../components/covidDataComponent';

export default class Places extends React.Component{
  constructor(props){
    super(props);
    this.state={
      covidDataComponent: null,
    }
  }

  async componentDidMount(){
    const userLocation = this.props.location.userLocation;
    let county = await getLocations(userLocation);
    let paramsArray = await getCovidData(county);
    let covidDataComponent = processDataResponse(paramsArray);
    this.setState({covidDataComponent: covidDataComponent})
  }

  render(){
    return(
      <div>
        <div className="row justify-content-center">
        <h1 className="my-3">Covid data for {this.props.location.userLocation}</h1>
        </div>
        {this.state.covidDataComponent == null ? "Loading Data" : this.state.covidDataComponent}
      </div>
    )
  }
}