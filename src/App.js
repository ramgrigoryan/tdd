import { useState } from 'react';
import './App.css';

const App = () => {
  const [colorState,setColorState] = useState(true)
  const [buttonState,setButtonState] = useState(false);
  return <div className='App'>
    <button style={{backgroundColor:colorState? "red":"green"}} onClick={()=>setColorState(!colorState)} disabled={buttonState}>{colorState?"Turn to green":"Turn to red"}</button>
    <input type='checkbox' onClick={()=>{setButtonState(!buttonState)}} />
  </div>
}

export default App;
