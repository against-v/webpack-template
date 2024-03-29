import React, { useEffect, useState } from 'react';
import './app.style.scss';
import MyImage from './images/test.jpg';

export const App = () => {
  console.log('APP');
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    setState(true);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <label htmlFor="input">Label</label>
        <input id="input" type="text" placeholder="placeholder" />
      </div>
      <img src={MyImage} alt="" />
    </>
  );
};
