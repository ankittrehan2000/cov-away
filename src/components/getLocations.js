import axios from "axios";

export default async function getLocations(locationString) {
  return getCountiesDataPromise()
    .then((response) => findCounty(response.data, locationString))
  //+- 1.5 for 100 miles of radius

  //once you have covid data only show outside adventures otherwise show indoor stuff too

  //returns places to visit
  /*axios
    .get(
      "http://api.opentripmap.com/0.1/en/places/radius?radius=160934&lon=-77.0369&lat=38.9072&kinds=restaurants&rate=3&apikey=5ae2e3f221c38a28845f05b671aada44a8f158ad99a9073e1ecf0874"
    )
    .then((response) => console.log(response.data));*/
}

function findCounty(countiesArray, locationString) {
  for (let i = 0; i < countiesArray.length; i++) {
    if (
      countiesArray[i].province
        .toLowerCase()
        .includes(locationString.toLowerCase())
    ) {
      return countiesArray[i];
    }
  }
}

function getCountiesDataPromise() {
  const headersCovid = {
    "x-rapidapi-key": "2c63bad8bemshf13a3cc39570957p1a7dd1jsn9addf7958327",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  };
  return axios
    .get("https://covid-19-statistics.p.rapidapi.com/provinces", {
      headers: headersCovid,
      params: { iso: "USA" },
    })
    .then(async (response) => response.data);
}
