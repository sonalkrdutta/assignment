import { useState } from 'react';
import './App.css';
function App() {
  const [Rheight, setHeight] = useState('');
  const [Rwidth, setWidth] = useState('');
  const [bgColor, setBgcolor] = useState('');
  const [button, setButton] = useState('press');
  const change = () => {
    setHeight("50vh")
    setWidth("50vh")
    setBgcolor("green")
    setButton("Button Clicked")
  }
  return (
    <div className="App">
      <div className="position" style={{}}>
        <div className="rectangle" style={{ backgroundColor: bgColor, height: Rheight, width: Rwidth }} />
      </div>
      <h6>Hello</h6>
      <h6>Hello Hello</h6>
      <h6>Hello Hello Hello</h6>
      <h6>Hello Hello Hello Hello</h6>
      <div className="button-position">
        <button className="button" onClick={change}>{button}</button>
      </div>
    </div>
  );
}

export default App;
