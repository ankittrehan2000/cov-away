import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function processDataResponse(paramsArray) {
  let dataArray = paramsArray[3];
  let processedArray = paramsArray.slice(0,3);
  return (
    <div>
      {processedArray[1] && (
        <h2 className="text-center">
          There are very few cases new cases reported in this location
        </h2>
      )}
      <h2 className="text-center">
        The cases here seem to be{" "}
        {processedArray[2] ? "increasing" : "decreasing"} overall
      </h2>
      <h4 className="text-center">Here are the latest covid statistics</h4>
      <div class="row justify-content-center">
        <Table stripped border hover className="mx-5">
          <thead>
            <tr>
              <th>Date</th>
              <th>Confirmed Total</th>
              <th>Difference</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((obj) => {
              return (
                <tr>
                  <td>{obj[0].date}</td>
                  <td>{obj[0].confirmed}</td>
                  <td>{obj[0].confirmed_diff}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {!processedArray[0] && (<div className="row mx-5 my-3 justify-content-between">
        {["museums", "restaurants", "malls"].map((string) => {
          let classes = `btn btn-${string === 'restaurants' ? "success" : "info"} rounded-top rounded-bottom`
        return (
          <Link
            className={classes}
            to={{
              pathname: "/activities",
              info: { category: string, countyData: dataArray[0] },
            }}
          >
            {string.charAt(0).toUpperCase() + string.slice(1)}
          </Link>
        )})}
      </div>)}
      <div className="row mx-5 my-3 justify-content-between">
        {["natural", "architechture", "historic"].map((string) => {
          return (
          <Link
            className="btn btn-info rounded-top rounded-bottom"
            to={{
              pathname: "/activities",
              info: { category: string, countyData: dataArray[0] },
            }}
          >
            {string.charAt(0).toUpperCase() + string.slice(1)}
          </Link>
        )})}
      </div>
      {processedArray[0] && (
        <p className="text-center">
          *Considering the above information, we will only be showing outdoor
          options
        </p>
      )}
    </div>
  );
}
