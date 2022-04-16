import React from "react";
import "./Result.css";
import {
  FormControl,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from 
 "@mui/material";
class Application extends React.Component {
  constructor(props) {
    super(props);

    //the Application component's state is below, which records the user's input.

    this.state = {
      //the display property on state allows me to toggle the view of the form vs. the view of the user's data
      display: false,
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
    };
  }

  inputCheck = (e) => {
    let filter = e.target.getAttribute("filter");
    e.target.value = e.target.value.replace(new RegExp(filter, "g"), "");
    this.setState({ [e.target.name]: e.target.value });
  };

  submitCheck = () => {
    if (!this.state.fullName) {
      alert("A name field is empty.");
    } else if (!this.state.email.match(/@./g)) {
      alert("Email is in the wrong format.");
    } else {
      this.setState({ display: true });
    }
  };

  resetForm = () => {
    this.setState({
      display: !this.state.display,
      firstName: "",
      lastName: "",
      phone: 0,
      email: "",
    });
  };

  displayForm() {
    return (
      <div className="form">
        <div className="header">
          <h1>View Result</h1>
          <p>To View The Result Please provide your information below.</p>
        </div>
        <div className="inputcontainer">
          {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
          {/* <input filter="[^a-zA-Z ]" name="lastName" placeholder="Father Name" onChange={this.inputCheck} />
          <input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number" onChange={this.inputCheck} /> */}
          <Grid container direction={"column"} spacing={3}>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                filter="[^a-zA-Z ]"
                name="fullName"
                placeholder="Full Name"
                onChange={this.inputCheck}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                placeholder="Email Address"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={level}
                  label="Level"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Level A</MenuItem>
                  <MenuItem value={20}>Level B</MenuItem>
                  <MenuItem value={30}>Level C</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Below is the submit button. Using the onClick event handler, it changes the value of this.state.display to false, which would trigger the ternary in the render method to display the user's info instead of this form*/}
            <Grid item>
              <Button onClick={this.submitCheck} variant="contained">
                Show Result
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  displayData() {
    return (
      <div className="form">
        <h2>Sant Singaji Educational Society, Sandalpur</h2>
        <div className="myForm">
          <Grid container rowSpacing={2} columns={8}>
            <Grid item xs={4}>
              <div>Name</div>
            </Grid>
            <Grid item xs={4}>
              <div>Sanjay Rajput</div>
            </Grid>
            <Grid item xs={4}>
              <div>Father Name</div>
            </Grid>
            <Grid item xs={4}>
              <div>sdhsaf</div>
            </Grid>
            <Grid item xs={4}>
              <div>Level</div>
            </Grid>
            <Grid item xs={4}>
              <div>A</div>
            </Grid>
            <Grid item xs={4}>
              <div>Class</div>
            </Grid>
            <Grid item xs={4}>
              <div>BCA</div>
            </Grid>
            <Grid item xs={4}>
              <div>Subject</div>
            </Grid>
            <Grid item xs={4}>
              <div>DataStructure & Algo</div>
            </Grid>
            <Grid item xs={4}>
              <div>Marks</div>
            </Grid>
            <Grid item xs={4}>
              <div>40</div>
            </Grid>
            <Button onClick={this.resetForm} variant="contained">
              Back
            </Button>
          </Grid>
        </div>
      </div>
    );
  }
  render() {
    {
      /* Here in the render method, I'm returning a ternary operator that displays either the form, or the user's data, depending on the boolean value that is currently set to this.state.display*/
    }
    return this.state.display ? this.displayData() : this.displayForm();
  }
}

{
  /*Here, I'm invoking the ReactDOM and connected. Here is where this Application component is being connected to the HTML portion of the pen, and thus displaying the form on the page */
}
export default Application;
