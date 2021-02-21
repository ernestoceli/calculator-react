import React from "react";

import "./Button.css";

export const Button = ({ content, type, buttonClicked, operatorClicked, equalClicked }) => {
  return (
    <div
      className={`Button ${content === "0" ? "zero" : null}
            ${content === "=" ? "equal" : null}
            ${type || null}`}
      onClick={
        type
          ? () => operatorClicked(content)
          : content === "="
          ? () => equalClicked()
          : () => buttonClicked(content)
      }
    >
      {content}
    </div>
  );
};
