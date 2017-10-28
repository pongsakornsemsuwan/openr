import axios from 'axios';

export async function fetchItems(dispatch, key) {
  const result = await axios.get(`http://localhost:3001/api/items?key=${key}`);
  console.log('!!!');
  console.log(result);
  dispatch({
    type: 'FETCH_COLLABORATIVE_ITEMS_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

export async function fetchCollaboratedItems(dispatch, sku, key) {
  dispatch({
    type: 'FETCH_COLLABORATED_LOADING', 
    payload: {
      isLoading: true
    }
  })
  const result = await axios.get(`http://localhost:8000/api/collaborative/item/${sku}/?key=${key}`);
  console.log('!!!');
  console.log(result);
  dispatch({
    type: 'FETCH_COLLABORATED_ITEMS_SUCCESSFUL', 
    payload: {
      collaboratedItems: result.data,
      isLoading: false,
    }
  })
}

export async function filterCollaborativeItems(dispatch, text){
  dispatch({
    type: 'FILTER_COLLABORATIVE_ITEMS', 
    payload: {
      text: text
    }
  })
}

