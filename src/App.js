import { useState } from 'react';
import './App.css';

const App = () => {
  const [colorState,setColorState] = useState(true)
  return <div className='App'>
    <button style={{backgroundColor:colorState? "red":"green"}} onClick={()=>setColorState(!colorState)}>{colorState?"Turn to green":"Turn to red"}</button>
  </div>
}

export default App;
