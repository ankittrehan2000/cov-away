import axios from "axios";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesList: [],
      countyData: null
    };
  }

  async componentDidMount() {
    let data = this.props.location.info;
    let response = await this.getActivities(data.category, data.countyData[0]);
    if (data.category === "restaurants"){
      response = this.filterResponse(response.features)
    }
    this.setState({
      activitiesList: response.features,
      countyData: data.countyData[0]
    });
  }

  getActivities(category, countyData) {
    let url = `http://api.opentripmap.com/0.1/en/places/radius?radius=160934&lon=${countyData.region.long}&lat=${countyData.region.lat}&kinds=${category}&rate=3&apikey=5ae2e3f221c38a28845f05b671aada44a8f158ad99a9073e1ecf0874`;
    return axios.get(url).then((response) => response.data);
  }

  filterResponse(list){
    let removeChains = ["dunkin' donuts", "five guys", "mcdonalds", "kfc"];
    let returnList = [];
    list.map((elem) => {
      if(removeChains.indexOf(elem.properties.name.toLowerCase()) === -1){
        returnList.push(elem)
      }
      return null;
    })
    return {features: returnList}
  }

  render() {
    return this.state.activitiesList.length > 0 ? (
      <div>
        <div className="my-5">
          <Link
            className="btn btn-info rounded-top rounded-bottom mx-5 mb-2 position-absolute"
            to="/"
          >
            Go back
          </Link>
          <h1 className="text-center align-self-center mb-5">List of things to do</h1>
          <ListGroup variant="flush" className="mt-5">
            {this.state.activitiesList.map((place) => {
              let baseLink = "https://www.google.com/search?q=";
              let state = this.state.countyData.region.province.split(" ");
              let placeName = place.properties.name.split(" ");
              let hrefLink = [baseLink, ...placeName, ...state].join("+");

              return (
              <ListGroup.Item variant="dark" action href={hrefLink} target="_blank">
                <p className="h6 text-center">{place.properties.name}</p>
                <div className="row justify-content-center">
                  <p className="mr-2">
                    <small>
                      Distance(in meters): {place.properties.dist} | tags:
                    </small>
                  </p>
                  <p>
                    <small>{place.properties.kinds}</small>
                  </p>
                </div>
              </ListGroup.Item>
            )})}
          </ListGroup>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}
