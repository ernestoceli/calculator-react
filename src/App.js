import "./App.css";
import React, { useState } from "react";
import { Button } from "./components/Button/Button.js";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operandOne, setOperandOne] = useState("0");
  const [operatorPressed, setOperatorPressed] = useState();

  const compute = (operandOne, operator, operandTwo) => {
    let result = "";

    if (operator === "+") {
      result = parseFloat(operandOne) + parseFloat(operandTwo);
    } else if (operator === "−") {
      result = parseFloat(operandOne) - parseFloat(operandTwo);
    } else if (operator === "×") {
      result = parseFloat(operandOne) * parseFloat(operandTwo);
    } else if (operator === "÷") {
      result = parseFloat(operandOne) / parseFloat(operandTwo);
    }

    return result;
  };

  const handleClick = (content) => {
    if (
      displayValue === "0" ||
      displayValue.includes("+") ||
      displayValue.includes("−") ||
      displayValue.includes("×") ||
      displayValue.includes("÷")
    ) {
      setDisplayValue(content);
    } else {
      setDisplayValue(displayValue + content);
    }
  };

  const handleOperator = (content) => {
    switch (content) {
      case "CE":
        setDisplayValue("0");
        setOperandOne("0");
        break;

      case "DEL":
        if (displayValue.length > 1) {
          setDisplayValue(displayValue.slice(0, -1));
        } else setDisplayValue("0");
        break;

      case "%":
        setDisplayValue((parseFloat(displayValue) / 100).toString());
        break;

      case "+":
      case "−":
      case "×":
      case "÷":
        setOperatorPressed(content);
        setOperandOne(displayValue);
        setDisplayValue(displayValue + content);
        return;
    }
  };

  const handleEqual = () => {
    if (operandOne === "0") {
      setDisplayValue("0");
    } else setDisplayValue(compute(operandOne, operatorPressed, displayValue));
  };

  return (
    <div className='App'>
      <div className='screen'>{displayValue}</div>
      <div className='row'>
        <Button content='CE' type='operator' operatorClicked={handleOperator} />
        <Button content='DEL' type='operator' operatorClicked={handleOperator} />
        <Button content='%' type='operator' operatorClicked={handleOperator} />
        <Button content='÷' type='operator' operatorClicked={handleOperator} />
      </div>
      <div className='row'>
        <Button content='7' buttonClicked={handleClick} />
        <Button content='8' buttonClicked={handleClick} />
        <Button content='9' buttonClicked={handleClick} />
        <Button content='×' type='operator' operatorClicked={handleOperator} />
      </div>
      <div className='row'>
        <Button content='4' buttonClicked={handleClick} />
        <Button content='5' buttonClicked={handleClick} />
        <Button content='6' buttonClicked={handleClick} />
        <Button content='−' type='operator' operatorClicked={handleOperator} />
      </div>
      <div className='row'>
        <Button content='1' buttonClicked={handleClick} />
        <Button content='2' buttonClicked={handleClick} />
        <Button content='3' buttonClicked={handleClick} />
        <Button content='+' type='operator' operatorClicked={handleOperator} />
      </div>
      <div className='row'>
        <Button content='0' buttonClicked={handleClick} />
        <Button content='.' buttonClicked={handleClick} />
        <Button content='=' equalClicked={handleEqual} />
      </div>
    </div>
  );
};

export default App;
