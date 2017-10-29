import axios from 'axios';

const djangoUrl = 'http://localhost:8000/api/';

export function fetchPopular(dispatch, period, key) {
  axios.get(`${djangoUrl}popularity?p=${period}&key=${key}`).then(function(response){
    dispatch({
      type: 'FETCH_POPULAR_SUCCESSFUL', 
      payload: {
        items: response.data
      }
    })
  })
  
}