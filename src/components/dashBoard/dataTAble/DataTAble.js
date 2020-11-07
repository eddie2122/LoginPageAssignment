import React from "react";
import { connect } from "react-redux";
import "./dataTable.css";
import store from "../../reduxStore/Store";

class DataTAble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: store.getState().usersData || [],
    };
  }

  render() {
    console.log("data", this.state.headers.id);
    return (
      <div className="table-striped">
        <h1>{}</h1>
        <table>
          <tbody>
            {this.state.headers.map((itemcol, idx) => (
              <div className="hide">
                <td> {this.state.headers[idx].id} </td>
                <td> {this.state.headers[idx].name} </td>
                <td> {this.state.headers[idx].age} </td>
                <td> {this.state.headers[idx].gender} </td>
                <td> {this.state.headers[idx].email} </td>
                <td> {this.state.headers[idx].phoneNo} </td>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.userData,
  };
};

export default connect(mapStateToProps)(DataTAble);
