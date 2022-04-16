import React from "react";
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  title,
  date,
  level,
  description
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <form className="formContainer"
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div class="container">
          <div className="title">
            <label>Title:-</label>
            <div>
              <input
                type="text"
                value={title}
                onChange={this.handleTitleChange}
              />
            </div>
          </div>

          <div className="date">
            <label>Date:-</label>
            <div>
              <input
                type="date"
                // className="form-control"
                value={date}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
          <div>
            <label>Level</label>
            <div>
              <select value={level} onChange={this.handleLevelChange}>
                x <option value="ITEG A">ITEG A</option>
                <option value="ITEG B">ITEG B</option>
                <option value="ITEG C">ITEG C</option>
              </select>
            </div>
          </div>
          <div>
            <label>Assignment Detail</label>
            <div>
              <textarea
                // className="form-control"
                id="exampleFormControlTextarea1"
                class="textarea"
                rows={3}
                defaultValue={""}
                value={description}
                onChange={this.handleDescriptionChange}
              ></textarea>
            </div>
          </div>
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <button type="button" className="btn btn-primary" id="attach">
              Attach
            </button>
            <br/>
            <br/>
          <div>
            <button type="submit" className="btn btn-primary" id="submit">
              Submit
            </button>
          </div>
          </label>
        </div>
      </form>
    </>
  );
}

export default Dashboard;