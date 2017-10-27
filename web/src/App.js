import React, { Component } from 'react';
import logo from './logo.svg';
import AppRoute from './routes';
import {Provider} from 'react-redux';
import store from './store';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {red600, red800, green100, grey300} from 'material-ui/styles/colors'

import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#5E81AC',
    primary2Color: '#81A1C1',
    primary3Color: green100
  },
  avatar: {
    borderColor: null
  },
  badge: {
    primaryColor: '#5E81AC',
    primaryTextColor: '#ffffff',
    secondaryColor: '#81A1C1',
    secondaryTextColor: '#ffffff'
  },
  //userAgent: 'all'

})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppRoute/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
