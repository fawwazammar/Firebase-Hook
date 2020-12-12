import React from 'react';
import './style.css';

const Item = (props) => {
  const { children } = props;
  return <div className="item">{children}</div>;
};

export default Item;
