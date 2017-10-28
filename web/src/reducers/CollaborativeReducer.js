import _ from 'lodash'

export default function reducer(state = {
  items:[],
  collaboratedItems: [],
  filteredItems: [],
  isLoading: false,
}, action) {
  switch (action.type) {
    case 'FETCH_COLLABORATIVE_ITEMS_SUCCESSFUL':
      {
        return Object.assign({}, state, {
           items: action.payload.items,
           filteredItems: action.payload.items,
        })
      }
    case 'FETCH_COLLABORATED_ITEMS_SUCCESSFUL':
      {
        return Object.assign({}, state, {
          collaboratedItems: action.payload.collaboratedItems,
          isLoading: action.payload.isLoading,
        })
      }
    case 'FETCH_COLLABORATED_LOADING':
    {
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading,
      })
    }
    case 'FILTER_COLLABORATIVE_ITEMS':
    {
      return Object.assign({}, state, {
        filteredItems: _.filter(state.items, function(item) { 
          return _.includes(item.sku.toLowerCase(), action.payload.text.toLowerCase());
        })
      })
    }
    default:
      {
        return state
      }
  }
}
