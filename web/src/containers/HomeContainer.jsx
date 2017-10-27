import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { initialize } from 'redux-form';
import { loginToApp } from '../actions/LoginAction';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class HomeContainer extends React.Component {


  handleLogin(loginInfo) {
    console.log(loginInfo);
    loginToApp(this.props.dispatch, loginInfo)
  }

  render(){
    console.log(this.props);

    if (this.props.isLoggedIn) {
      return (<Redirect to="/dashboard/analytics/popularity"/>)
    } else {
      return (<div>
        <LoginForm onSubmit={this.handleLogin.bind(this)}/>
      </div>)
    }
  }
}
  
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.SessionReducer.isLoggedIn,
  }
}

export default connect(mapStateToProps)(HomeContainer);