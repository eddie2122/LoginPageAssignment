import React, { Component } from 'react';
import { connect } from 'react-redux'
import DataTAble from './dataTAble/DataTAble'
import store from "../reduxStore/Store";


class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: store.getState().usersData,
        };
    }
    onUpdateTable = (field, id, value) => {};
    
    render() {
        return (
          <div>
            <h1>Dashboard</h1>
            <DataTAble
              className="data-table"
              keyField="id"
              edit={true}
              pagination={{
                enabled: true,
                pageLength: 15,
                type: "Long", //Long or Short
              }}
              width="100%"
              data={this.state.user}
              onUpdate={this.onUpdateTable}
            />
          </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    userProfile: state.userData,
  };
};

export default connect(mapStateToProps)(DashBoard);