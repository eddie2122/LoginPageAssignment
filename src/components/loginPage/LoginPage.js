import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DashBoard from "../dashBoard/DashBoard";
import "./loginPAge.css";
import { logUserIn } from "../reduxStore/LoginActions";
// import { LoginReducer } from "../reduxStore/LoginReducer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      username: "",
      password: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleClick = () => {
    // this.props.logError(this.state.input.email, this.state.input.password);
     this.props.logUserIn(this.state.input.email, this.state.input.password);
     
  };

  handleSubmit(event) {
    
    event.preventDefault();

    if (this.validate()) {
      let input = {};
      input["email"] = "";
      input["password"] = "";
      this.setState({ input: input });
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    let email = "edwinrichard2122@gmail.com";
    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined" && input["email"] !== email) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    if (typeof input["password"] !== "undefined") {
      if (input["password"].length < 6) {
        isValid = false;
        errors["password"] = "Please add at least 6 charachter.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
    console.log("error", this.props.loginError);
    console.log("logged?", this.props.isLoggedIn);
    if (this.props.isLoggedIn) {
      return <DashBoard></DashBoard>;
    }

    return (
      <div className="container">
        <h1 className="login-page">Dashboard</h1>
        <form onSubmit={this.handleSubmit} action="google.com">
          <div class="form-group">
            <label for="email" className="login-page">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control"
              placeholder="Enter email"
              id="email"
            />

            <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div class="form-group">
            <label for="password" className="login-page">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter password"
              id="password"
            />

            <div className="text-danger">{this.state.errors.password}</div>
          </div>
          <button onClick={this.handleClick} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userProfile: state.userProfile,
    loginError: state.loginError,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logUserIn: logUserIn }, dispatch);
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
