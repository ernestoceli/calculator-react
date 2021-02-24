import React from "react";
import "./History.css";

export const History = () => {
  return (
    <>
      <a className='history-icon' href='#'>
        <img
          src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_history_48px-512.png'
          width='20px'
          height='20px'
        />
      </a>
      <div className='history-list'>
        <p className='exit-button'>×</p>
      </div>
    </>
  );
};
