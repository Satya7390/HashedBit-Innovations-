// Develop a Calculator component
// There should be two input fields and four buttons for addition, subtration, multiplication and division. Also display the output in an another div

//======================================================================================================================================================

import React, { useState } from 'react';
import '../Calculator.css';
const Calculator = () => {
   
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

   
    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    const handleAddition = () => {
        const sum = parseFloat(input1) + parseFloat(input2);
        setResult(sum);
    };
    const handleSubtration = () => {
        const sub = parseFloat(input1) - parseFloat(input2);
        setResult(sub);
    };
    const handleMultiplication = () => {
        const mul = parseFloat(input1) * parseFloat(input2);
        setResult(mul);
    };

    const handleDivision = () => {
        const div = parseFloat(input1) /  parseFloat(input2);
        setResult(div);
    };

    return (
        <div className='body' >
        <div id="main">
          
            <h2 id='h2'>React Assignment 1 - Calculator</h2>
            <div id="input">
            Value:<input className='input'
                type="number" value={input1} onChange={handleInput1Change} placeholder="Enter value..."
            /><br/>
            Value:<input className='input'
                type="number" value={input2} onChange={handleInput2Change} placeholder="Enter value..."
            /><br/>
            </div>
            <div id="button">
            <button  className='button' onClick={handleAddition}>+</button>
            <button className='button' onClick={handleSubtration}>-</button>
            <button className='button' id="mul" onClick={handleMultiplication}>*</button>
            <button className='button' onClick={handleDivision}>/</button>
            </div>
            <div id='result'>Result:  {result}</div>
        </div>
        </div>
    );
};

export default Calculator;
