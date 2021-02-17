import React from 'react';
import './Button.css'

export const Button = ( {content, type} ) => {
    return (
        <div className={`Button ${content==="0" ? "zero" : null}
            ${content==="=" ? "equal" : null}
            ${type || null}`
            }>
            {content}
        </div>
    );
}