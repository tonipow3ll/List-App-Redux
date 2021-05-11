import React, { ChangeEvent } from 'react';

interface NewItemProps {
    addItem(item:string): void;
}

export const NewItem:React.FC<NewItemProps> = ({ addItem }) => {
    const [item, setItem] = React.useState("")
    const updateItem = (event:ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }

    const onAddItemClick = () => {
        addItem(item)
        setItem("")
    }
    return (
        <div>

    <input onChange={updateItem} value={item}type="text" name="todo" placeholder = "to do" />
    <button onClick={onAddItemClick}>Add </button>
    </div>
    )
}