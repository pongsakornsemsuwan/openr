
export default function reducer(state = {
  isLoggedIn: false,
  userInfo: {
    _id: '',
    name: '',
    email: '',
  }
}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      {
        return Object.assign({}, state, {
          isLoggedIn: true,
          userInfo : {
            email: action.payload.email,
          }
        })
      }
    case 'LOGOUT_SUCCESSFUL':
      {
        return Object.assign({}, state, {
          isLoggedIn: false,
          name:'',
          email:'',
          token:''
        })
      }
    default:
      {
        return state
      }
  }
}
