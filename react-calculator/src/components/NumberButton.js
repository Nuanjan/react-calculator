import React from 'react';


const NumberButton = ({name}) => {
    const style = {
        gridArea: {name},
        backgroundColor: '#3b3b3b',
        color: '#ffffff',
        borderRadius: '50%',
        height: '30px',
        width: '30px',
        border: 'none'
    }
    return (
       <button style={style} className="numButton" >{name}</button>
    );
};

export default NumberButton;