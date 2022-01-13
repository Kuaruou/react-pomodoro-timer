import './App.css';
import Settings from './Settings';
import Timer from "./Timer"
import { useState } from 'react'
import SettingContext from './SettingContext';

function App() {

  // const initialState = true
  
  const [ showSettings, setShowSettings ] = useState(false)
  const [ workMinutes, setWorkMinutes ] = useState(45)
  const [ breakMinutes, setBreakMinutes ] = useState(15)

  return (
    <main>
      <SettingContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingContext.Provider>
    </main>
  );
}

export default App;
