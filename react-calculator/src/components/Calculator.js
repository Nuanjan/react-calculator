import React, {useEffect, useState} from 'react'
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import './Calculator.css'

// components
// main div is a grid container
// Result <p></p>
// 3 div for buttons (lightgrey, orange, darkgrey) => grid wrapper
// Reusable number button component (darkgrey)
// Reusable operation button component (lightgrey and orange)

// main div grid container => 
// display: grid
// grid-template-rows: 2fr repeat(5, 1fr)
// grid-template-columns: repeat(4, 1fr)

// Result grid item
// grid-area: result

// Div lightgrey => grid-area: lightgrey
// display: inline-grid
// grid-template-rows: 1fr;
// grid-template-columns: repeat(3, 1fr)

// Div orange => grid-area: orange
// display: inline-grid
// grid-template-rows: repeat(5, 1fr);
// grid-template-columns: 1fr;

// Div darkgrey => grid-area: darkgrey
// display: inline-grid
// grid-template-rows: repeat(4, 1fr);
// grid-template-columns: repeat(3, 1fr);

// Reusable number button
// grid item
// grid-area: props.name

// Reusable operation button
// grid item
// grid-area: props.name
// backgroundColor: 
// if(props.color === 'orange') 
//   { style = {bgColor: orange, color: white}   }
// else if(props.color === 'lightgrey') 
//  {  style = {bgColor: lightgrey, color: black}    }
// create useState Value, currentOperation, currentResult
// create function onClick Number => concat this num tot he current value
// => + set currentResult to currentValue, reset currentValue to ""
// => currentOperator to "+"
// create function onClickOperator("=")

const style = {}


const Calculator = () => {
const numberList = [["zero", "0"], ["one", "1"], ["two","2"], ["three","3"], ["four","4"], ["five","5"], ["six","6"], ["seven","7"], ["eight","8"], ["nine","9"], ["dot","."]];
const lightgreyList = ["C", "+/-", "%"];
const orangeList = ["/", "x", "-", "+", "="];
const [value, setValue] = useState("");
const [operation, setOperation] = useState("");
const [result, setResult] = useState(0);
const [display, setDisplay] = useState(value)

const onClickNumber = (num) => {
setValue(value.concat(num));
setDisplay(value.concat(num));
}
const onClickOperation = (operation) => {
if(operation === 'C') {
    setValue('');
    setOperation('');
    setResult(0)
} else if (operation ==='+') {
    setResult(result + parseFloat(value));
    setValue("");
    setOperation("+");
    setDisplay(result + parseFloat(value));
} 
}
useEffect(() => {
    setDisplay(result)
},[result])

    return (
      <div className="container">
        <p className="result">{display || "0"}</p>
        <div className="lightgrey">
          {lightgreyList.map((name, index) =>   
            <OperatorButton name={name} key={index} color="lightgrey" />
          )}
        </div>
        <div className="orange">
          {orangeList.map((name, index) => 
            <OperatorButton 
            name={name} 
            key={index} 
            color="orange"
            onClickOperation={onClickOperation}
            />
          )}
        </div>
        <div className="darkgrey">
          {numberList.map((num, index) => 
            <NumberButton 
            name={num[1]} 
            areaName={num[0]} 
            key={index} 
            onClickNumber={onClickNumber} />
          )}
        </div>
      </div>
    );
}


export default Calculator;