export function logoutFromApp() {
  let loginInfo = {
      email: '',
  }
  return {
    type: 'LOGOUT_SUCCESSFUL', 
    payload: {
      loginInfo: { loginInfo }
    }
  }
}

export function loginToApp(dispatch, loginInfo) {
  dispatch({
    type: 'LOGIN_SUCCESSFUL', 
    payload: {
      email: loginInfo.email
    }
  });
}
