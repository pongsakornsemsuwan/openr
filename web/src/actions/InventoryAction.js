import axios from 'axios';

export async function fetchItems(dispatch, key) {
  const result = await axios.get(`http://localhost:3001/api/items?key=${key}`);
  dispatch({
    type: 'FETCH_ITEMS_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

