import React from 'react';
import { connect } from 'react-redux'
import './dataTable.css'



class DataTAble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : props.user || [],
        };
    }
    

    render() {
    return (
      <div className="table-striped">
        <table>
          <tbody>
            {this.state.headers.map((itemcol, idx) => (
              <div className="hide">
                  <td > {this.state.headers[idx].id} </td>
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

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
        user : state.user
    }
  }

export default connect(mapStateToProps)(DataTAble);