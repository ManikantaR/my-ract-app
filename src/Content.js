import React from 'react';
import { useState } from 'react';

const Content = () => {
  const names = ['mani', 'ritu', 'syamu', 'sreenu'];
  const [name, setName] = useState(names[0]);

  const handleNameChange = () => {
    const index = Math.floor(Math.random() * 4);
    setName(names[index]);
  };

  const handleClick = () => {
    console.log('dang!!');
  };
  const handleClickWithParm = (name) => {
    console.log(`dang!! ${name}`);
  };
  return (
    <>
      <p> Hello {name}</p>
      <button onClick={handleClick}>clickit</button>
      <button onClick={() => handleClickWithParm('Mani')}>clickit</button>
      <button onClick={handleNameChange}>clickit</button>
    </>
  );
};

export default Content;
