import "./App.css";
import React, { useState } from "react";
import { Button } from "./components/Button/Button.js";
import { History } from "./components/History/History.js";

const App = () => {
  const [historyId, setHistoryId] = useState(0);
  const [history, setHistory] = useState([]);
  const [displayValue, setDisplayValue] = useState("0");
  const [operandOne, setOperandOne] = useState("0");
  const [operatorPressed, setOperatorPressed] = useState();
  const [displayOperation, setDisplayOperation] = useState("");
  const [equalClicked, setEqualClicked] = useState(false);

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

    return result.toString();
  };

  const handleClick = (content) => {
    if (equalClicked) {
      setDisplayValue(content);
      setDisplayOperation("");
      setOperandOne("0");
      setEqualClicked(false);

      return;
    }

    if (displayValue === "0") {
      setDisplayValue(content);
    } else if (displayValue.includes(".") && content === ".") {
      setDisplayValue(displayValue);
    } else {
      setDisplayValue(displayValue + content);
    }
    setEqualClicked(false);
  };

  const handleOperator = (content) => {
    switch (content) {
      case "CE":
        setDisplayValue("0");
        setOperandOne("0");
        setDisplayOperation("");
        setEqualClicked(false);
        break;

      case "DEL":
        if (equalClicked) {
          break;
        } else if (displayValue.length > 1) {
          setDisplayValue(displayValue.slice(0, -1));
        } else setDisplayValue("0");
        break;

      case "%":
        setDisplayValue((parseFloat(displayValue) / 100).toString());
        break;

      case "−":
      case "+":
      case "×":
      case "÷":
        setOperatorPressed(content);
        setOperandOne(displayValue);
        setDisplayOperation(displayValue + " " + content);
        setDisplayValue("0");
        setEqualClicked(false);
        return;
    }
  };

  const handleEqual = () => {
    if (equalClicked) {
      return;
    }

    if (operandOne === "0") {
      setDisplayValue("0");
    } else {
      setDisplayOperation(displayOperation + " " + displayValue + " =");
      setDisplayValue(compute(operandOne, operatorPressed, displayValue));
      setEqualClicked(true);
      setHistoryId(historyId + 1);
      setHistory((history) => [
        ...history,
        {
          id: historyId + 1,
          op1: operandOne,
          sign: operatorPressed,
          op2: displayValue,
          result: compute(operandOne, operatorPressed, displayValue),
        },
      ]);
      console.log(history);
    }
  };

  return (
    <div className='App'>
      <History />
      <div className='screen'>
        <p className='display-operation'>{displayOperation}</p>
        <p className='display-current'>{displayValue}</p>
      </div>
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
