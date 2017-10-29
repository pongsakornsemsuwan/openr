import axios from 'axios';

export function fetchItems(dispatch, key) {

  dispatch({
    type: 'FETCH_COLLABORATIVE_LOADING', 
    payload: {
      isLoading: true
    }
  })

  axios.get(`http://localhost:3001/api/items?key=${key}`)
    .then(function(response){
      dispatch({
      type: 'FETCH_COLLABORATIVE_ITEMS_SUCCESSFUL', 
      payload: {
        items: response.data,
        isLoading: false
      }
    })
  })
}

export function fetchCollaboratedItems(dispatch, sku, key) {
  dispatch({
    type: 'FETCH_COLLABORATED_LOADING', 
    payload: {
      isLoading: true
    }
  })
  axios.get(`http://localhost:8000/api/collaborative/item/${sku}/?key=${key}`).then(
    function(response){
      dispatch({
        type: 'FETCH_COLLABORATED_ITEMS_SUCCESSFUL', 
        payload: {
          collaboratedItems: response.data,
          isLoading: false,
        }
      })
    }
  )
}

export function filterCollaborativeItems(dispatch, text){
  dispatch({
    type: 'FILTER_COLLABORATIVE_ITEMS', 
    payload: {
      text: text
    }
  })
}

