import axios from 'axios';

export function fetchItems(dispatch, key) {

  axios.get(`http://localhost:3001/api/items?key=${key}`)
    .then(function(response){
      dispatch({
      type: 'FETCH_ITEMS_SUCCESSFUL', 
      payload: {
        items: response.data
      }
    })
  });
  
}

