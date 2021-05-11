import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './actions';
import { itemState } from './itemReducer';
import { NewItem } from './NewItem';



function App() {
  const items = useSelector<itemState, itemState["items"]>((state) => state.items)
  const dispatch = useDispatch()

  const onAddItem = (item:string) => {
    dispatch(addItem(item))
  }
  return (
    <>
  <NewItem addItem={onAddItem}/>
<ul>
  {items.map((item) => {
    return <li key={item}>{item}</li>
  })}
  <li> some note</li>
</ul>
        </>
  );
}

export default App;
