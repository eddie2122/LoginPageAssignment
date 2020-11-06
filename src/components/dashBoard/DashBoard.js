import React, { Component } from 'react';
import { connect } from 'react-redux'
import DataTAble from './dataTAble/DataTAble'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : props.user
        }
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
                        type: "Long" //Long or Short
                    }}
                    width= "100%"
                    data = {this.props.user}
                    onUpdate={this.onUpdateTable}
                    />
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

export default connect(mapStateToProps)(DashBoard);