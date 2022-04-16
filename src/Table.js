import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="table">
      {/* <h3>IT Management Time Table</h3> */}
      <div id="btn">
        <button className="button">Add new</button>
        <button className="button">Save</button>
      </div>
      <div>
        <table>
          <tr>
            <th>Date</th>
            <th>Time-start</th>
            <th>Time-End</th>
            <th>Subject</th>
            <th>Level</th>
            <th>Facalty</th>
          </tr>
          <tr>
            <td>02-01-2022</td>
            <td>10:30AM</td>
            <td>11:50AM</td>
            <td>C language</td>
            <td>"A"</td>
            <td>Poonam Mam</td>
          </tr>
          <tr>
            <td>02-01-2022</td>
            <td>12:30PM</td>
            <td>02:30PM</td>
            <td>Data structure</td>
            <td>"B"</td>
            <td>Poonam Mam</td>
          </tr>
          <tr>
            <td>02-01-2022</td>
            <td>12:30PM</td>
            <td>02:00PM</td>
            <td>Interview praperation</td>
            <td>"C"</td>
            <td>Poorva Mam</td>
          </tr>
          <tr>
            <td>02-01-2022</td>
            <td>02:00PM</td>
            <td>03:30PM</td>
            <td>Aptitude</td>
            <td>"C"</td>
            <td>Yogendra Sir</td>
          </tr>
          <tr>
            <td>02-01-2022</td>
            <td>03:30PM</td>
            <td>04:45PM</td>
            <td>Self Study</td>
            <td>"C"</td>
            <td>Poorva Mam</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Table;
