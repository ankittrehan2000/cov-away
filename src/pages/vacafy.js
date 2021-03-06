import React from "react";
import getLocations from "../components/getLocations";
import getCovidData from "../components/getCovidData";
import getProductsList from "../components/getProductsList";
import getLoader from "../components/loaderComponent"
import { Card, Button } from "react-bootstrap";

export default class Vacafy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
    };
  }

  async componentDidMount() {
    const userLocation = this.props.location.userLocation;
    let county = await getLocations(userLocation);
    let situationArray = await getCovidData(county);
    let productsList = getProductsList(
      situationArray[0],
      situationArray[1],
      situationArray[2]
    );
    this.setState({
      productsList: productsList,
    });
  }

  render() {
    return this.state.productsList.length > 0 ? (
        <div
          style={{
            backgroundImage: `url(/background.jpeg)`,
            width: "100vw",
          }}
>
        <h1 className="mb-5 text-center">Our recommended products</h1>
        <div className="row justify-content-center mx-1">
        {this.state.productsList.map((product) => {
          let classes =
            product.reason === "Staycation essentials" ? "text-success" : "";

          return (
            <div className="mx-1 my-2 rounded-top rounded-bottom">
              <Card style={{ width: "18rem", height: "50rem" }}>
                <Card.Img variant="top" src={product.assetPath} style={{ height: "20rem"}}></Card.Img>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className={classes}>
                    Reason for feature: {product.reason}
                  </Card.Text>
                  <p className="h2 text-danger">Price: ${product.price}</p>
                  <p className="h4 text-warning">Ratings: {product.ratings}</p>
                  <Button
                    variant="primary"
                    href={product.amazonLink}
                    target="_blank"
                  >
                    View on Amazon
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        </div>
      </div>
    ) : (
      getLoader()
    );
  }
}
