import React, { useState } from "react";
import { Item } from "../Item/Item.js";
import "./History.css";

export const History = ({ historyList }) => {
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
        {historyList.length > 0 ? (
          historyList.map((op) => {
            return <Item one={op.op1} two={op.op2} res={op.result} />;
          })
        ) : (
          <p>Nothing to show yet</p>
        )}
      </div>
    </>
  );
};
