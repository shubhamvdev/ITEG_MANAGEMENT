import React from "react";

const About = () => {
  return (
    <>
      <form>
        <label for="exampleFormControlInput1" class="form-label">
          Title
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Your Title"
        />
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Assignment
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Input Assignment"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default About;
