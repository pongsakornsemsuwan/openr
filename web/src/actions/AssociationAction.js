import axios from 'axios';

export async function fetchItems(dispatch, key) {
  const result = await axios.get(`http://localhost:3001/api/items?key=${key}`);
  console.log('!!!');
  console.log(result);
  dispatch({
    type: 'FETCH_ASSOCIATION_ITEMS_SUCCESSFUL', 
    payload: {
      items: result.data
    }
  })
}

export async function fetchAssociatedItems(dispatch, sku, key) {
  dispatch({
    type: 'FETCH_ASSOCIATED_LOADING', 
    payload: {
      isLoading: true
    }
  })
  const result = await axios.get(`http://localhost:8000/api/association/item/${sku}/?key=${key}`);
  console.log('!!!');
  console.log(result);
  dispatch({
    type: 'FETCH_ASSOCIATED_ITEMS_SUCCESSFUL', 
    payload: {
      associatedItems: result.data,
      isLoading: false,
    }
  })
}

export async function filterAssociationItems(dispatch, text){
  dispatch({
    type: 'FILTER_ASSOCIATION_ITEMS', 
    payload: {
      text: text
    }
  })
}

