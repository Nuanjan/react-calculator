import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import './Calculator.css'

// components
// main div is a grid container
// Result<p></p>
// 3 div button (light gray, orange, dark gray)
// light gray div is grid wrapper
// reusable number button component( dark gay)
// Reusable operation button component(light gray and orange)
// 
// main div grid container
// grid-template-rows: 2fr repeat(5, 1fr)
// grid-template-columns: repeat(4, 1fr)

// Result grid item
// grid-area: result

//div lightgray => grid-area: lightgray
//display: inline-grid
//div darkgray => grid-area: darkgray
//display: inline-grid
// grid-template-rows: RTCIceCandidatePairChangedEvent(4, 1fr)

//div orange => grid-area: orange
//display: inline-grid

// Reusable operator GamepadButton// grid item 
// grid area: prop.name
// backgroundColor: 
// if(prop.color === 'orange')
// {style = bgColor: orange, color: white} }
// else if(props.color === 'lightgray')
// { style={bgColor: leightgray, color: black}}

const Calculator = () => {
    const [result, setResult] = useState(0)
    const numberList = ["0","1","2","3","4","5","6","7","8","9","."]
    const lightgrayList = ["c","+/-","%"]
    return (
        <div className="container">
            <p className='result'>{result}</p> 
            <div className="lightgray">
                {lightgrayList.map((name, index) => 
                <OperatorButton name={name}
                key={index}
                color="lightgray" />
                )}
            </div>
            <div className="orange">
                <OperatorButton name="+" color="orange" />
            </div>
            <div className="darkgray">
                {numberList.map((name, index) => 
                <NumberButton name={name} key={index}/>
                )}
            </div>
        </div>
    );
};

export default Calculator;