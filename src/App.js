import { useState } from 'react';
import './App.css';


export const spaceInseadOfCamelCase = (colorName)=> colorName.replace(/(\B[A-Z])/g, " $1")

const App = () => {
  const [colorState,setColorState] = useState(true)
  const [buttonState,setButtonState] = useState(false);
  return <div className='App'>
    <button style={{backgroundColor:buttonState?"grey":colorState? "red":"green"}} onClick={()=>setColorState(!colorState)} disabled={buttonState}>{colorState?"Turn to green":"Turn to red"}</button>
    <label htmlFor='disableCheckbox'>disable colored button</label>
    <input id="disableCheckbox" type='checkbox' onClick={()=>{setButtonState(!buttonState)}} />
  </div>
}

export default App;
