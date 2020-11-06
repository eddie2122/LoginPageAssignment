import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LoginPage from './components/loginPage/LoginPage'
import Store from './components/reduxStore/loginValue/Store'


class App extends Component {
  render() {
    return (
      <Provider store ={Store}>
      <div>
        <LoginPage/>
      </div>
      </Provider>
    );
  }
}

export default App;