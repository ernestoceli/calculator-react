import './App.css';
import { Button } from './Button.js';

const App = () => {
  return (
    <div className="App">
      <div className="screen">0</div>
      <div className="row">
        <Button content="CE" type="operator" />
        <Button content="DEL" type="operator" />
        <Button content="%" type="operator" />
        <Button content="÷" type="operator" />
      </div>
      <div className="row">
        <Button content="7" />
        <Button content="8" />
        <Button content="9" />
        <Button content="×" type="operator" />
      </div>
      <div className="row">
        <Button content="4" />
        <Button content="5" />
        <Button content="6" />
        <Button content="−" type="operator" />
      </div>
      <div className="row">
        <Button content="1" />
        <Button content="2" />
        <Button content="3" />
        <Button content="+" type="operator" />
      </div>
      <div className="row">
        <Button content="0" />
        <Button content="." />
        <Button content="=" />
      </div>
    </div>
  );
}

export default App;
