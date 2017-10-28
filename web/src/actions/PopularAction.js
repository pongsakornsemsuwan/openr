import axios from 'axios';

const djangoUrl = 'http://localhost:8000/api/';

export async function fetchPopular(dispatch, period, key) {
  const result = await axios.get(`${djangoUrl}popularity?p=${period}&key=${key}`);
  dispatch({
    type: 'FETCH_POPULAR_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

export async function fetchPopular30(dispatch, period, key) {
  const result = await axios.get(`http://localhost:3001/api/items?key=${'59e1f0dac82daf63d6da4d32'}`);
  dispatch({
    type: 'FETCH_POPULAR_30_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

export async function fetchPopularAll(dispatch, period, key) {
  const result = await axios.get(`http://localhost:3001/api/items?key=${'59e1f0dac82daf63d6da4d32'}`);
  dispatch({
    type: 'FETCH_POPULAR_ALL_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

