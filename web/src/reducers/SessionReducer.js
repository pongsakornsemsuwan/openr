
export default function reducer(state = {
  isLoggedIn: false,
  key: '',
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
          },
          key: action.payload.email == 'crayon@crayon.com' ? '59e1f0dac82daf63d6da4d32' : '59f373a540e4c1960ce7c927'
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
