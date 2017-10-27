import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import DashboardContainer from './DashboardContainer';

class EnsureLoggedInContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch, currentURL, isLoggedIn } = this.props
    console.log(isLoggedIn);
    // if (!isLoggedIn) {
    //   // set the current url/path for future redirection (we use a Redux action)
    //   // then redirect (we use a React Router method)
    //   dispatch(setRedirectUrl(currentURL))
    //   browserHistory.replace("/login") 
      
    // }
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <Route path="/dashboard" component={DashboardContainer}/>
      )
    } else {
      return (<Redirect to="/login"/>)
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.SessionReducer.isLoggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)