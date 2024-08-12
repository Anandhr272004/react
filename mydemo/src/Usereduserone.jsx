
import React, { useReducer,useState } from 'react';

// Initial state
const initialState = {
  items: []
};

// Reducer function
function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item !== action.payload) };
    case 'RESET_LIST':
      return initialState;
    default:
      return state;
  }
}

const UseReducerone= () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setNewItem('');
    }
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleResetList = () => {
    dispatch({ type: 'RESET_LIST' });
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleResetList}>Reset List</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(item)}>  --Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerone;