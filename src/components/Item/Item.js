import React from "react";
import "./Item.css";

export const Item = ({ one, two, res }) => {
  return (
    <div>
      <p className='history-numbers'>
        {one} + {two} =
      </p>
      <p className='history-numbers'>{res}</p>
    </div>
  );
};
