import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LoginPage from './components/loginPage/LoginPage'
import Store from './components/reduxStore/Store'
import './App.css'


class App extends Component {
  render() {
    console.log(Store.getState())
    return (
      <Provider store ={Store}>
      <div className = "App">
        <LoginPage/>
      </div>
      </Provider>
    );
  }
}

export default App;