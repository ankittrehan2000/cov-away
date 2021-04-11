import axios from "axios";

export default async function getLocations(locationString) {
  return getCountiesDataPromise()
    .then((response) => findCounty(response.data, locationString))
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
    "x-rapidapi-key": ,
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  };
  return axios
    .get("https://covid-19-statistics.p.rapidapi.com/provinces", {
      headers: headersCovid,
      params: { iso: "USA" },
    })
    .then(async (response) => response.data);
}
