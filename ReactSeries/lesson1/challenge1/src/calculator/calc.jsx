import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0);

  const handleNum1 = (e) => {
    const { value } = e.target;
    setNum1(parseFloat(value)); // Parse input as float
  };

  const handleNum2 = (e) => {
    const { value } = e.target;
    setNum2(parseFloat(value)); // Parse input as float
  };

  const handleOperator = (e) => {
    const { value } = e.target;
    setOperator(value);
  };

  const handleResult = (e) => {
    e.preventDefault(); // Prevent form submission
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '/':
        if (num2 !== 0) {
          setResult(num1 / num2);
        } else {
          setResult('Cannot divide by zero');
        }
        break;
      case '*':
        setResult(num1 * num2);
        break;
      default:
        setResult(0);
    }

    setNum1(0);
    setNum2(0);
    setOperator('');
  };

  return (
    <div>
      <h2>Calculator</h2>
      <form onSubmit={handleResult}>
        <div>
          <label htmlFor="num1">First Num:</label>
          <input
            id="num1"
            type="number"
            value={num1}
            onChange={handleNum1}
          />
        </div>

        <div>
          <label htmlFor="operator">Operator:</label>
          <input
            placeholder="+ - / *"
            id="operator"
            type="text"
            value={operator}
            onChange={handleOperator}
          />
        </div>

        <div>
          <label htmlFor="num2">Second Num:</label>
          <input
            id="num2"
            type="number"
            value={num2}
            onChange={handleNum2}
          />
        </div>

        <button type="submit">Perform</button>
        <h1>Result: {result}</h1>
      </form>
    </div>
  );
}

export default Calculator;
