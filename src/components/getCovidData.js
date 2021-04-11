import axios from "axios";

export default async function getCovidData(county) {
  let dataArray = [];
  //get historical data
  let date = new Date();
  date.setDate(date.getDate() - 3);
  for (let i = 0; i < 6; i++) {
    let dataForDay = await getCovidDataPromise(county, date).then(
      (response) => response.data
    );
    dataArray.push(dataForDay);
    date.setDate(date.getDate() - 1);
  }
  return [...isDanger(dataArray), dataArray];
}

function getCovidDataPromise(county, date) {
  const headers = {
    "x-rapidapi-key": ,
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  };

  return axios
    .get("https://covid-19-statistics.p.rapidapi.com/reports", {
      headers: headers,
      params: {
        region_province: county.province,
        iso: "USA",
        date: date.toISOString().split("T")[0],
      },
    })
    .then((response) => response.data);
}


function isDanger(dataArray) {
  let differenceArray = [];
  dataArray.map((obj) => differenceArray.push(parseInt(obj[0].confirmed_diff)));
  let maxVal = Math.max(...differenceArray);
  let veryFewCases = maxVal < 1500 ? true : false;
  let increasingCases = isIncreasing(differenceArray);
  let caseTrend = veryFewCases ? !veryFewCases : increasingCases;
  return [caseTrend, veryFewCases, increasingCases];
}

function isIncreasing(xs) {
  let counter = 0;
  xs = xs.reverse();
  for (var i = 1; i < xs.length; i++) {
    if (xs[i] !== xs[i - 1] && xs[i] < xs[i - 1]) {
      //circumvent random one day dip in cases
      counter += 1;
    }
    if (counter > 1){
      return true
    }
  }

  return false;
}
