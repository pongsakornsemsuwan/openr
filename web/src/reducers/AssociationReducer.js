import _ from 'lodash'

export default function reducer(state = {
  items:[],
  associatedItems: [],
  filteredItems: [],
  isLoading: false,
}, action) {
  switch (action.type) {
    case 'FETCH_ASSOCIATION_ITEMS_SUCCESSFUL':
      {
        return Object.assign({}, state, {
           items: action.payload.items,
           filteredItems: action.payload.items,
        })
      }
    case 'FETCH_ASSOCIATED_ITEMS_SUCCESSFUL':
      {
        return Object.assign({}, state, {
          associatedItems: action.payload.associatedItems,
          isLoading: action.payload.isLoading,
        })
      }
    case 'FETCH_ASSOCIATED_LOADING':
    {
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading,
      })
    }
    case 'FILTER_ASSOCIATION_ITEMS':
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
