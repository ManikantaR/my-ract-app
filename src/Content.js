import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: 'Tomatoes',
    },
    {
      id: 2,
      checked: false,
      item: 'Oranges',
    },
    {
      id: 3,
      checked: false,
      item: 'Potatoes',
    },
  ]);

  const handleCheck = (key) => {
    const listItems = items.map((item) =>
      item.id === key ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="buttone" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
