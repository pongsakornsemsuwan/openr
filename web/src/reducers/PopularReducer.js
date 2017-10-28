
export default function reducer(state = {
  items:[]
}, action) {
  switch (action.type) {
    case 'FETCH_POPULAR_SUCCESSFUL':
      {
        return Object.assign({}, state, {
           items: action.payload.items,
        })
      }
    default:
      {
        return state
      }
  }
}
