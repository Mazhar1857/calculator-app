import { useEffect, useState } from 'react'
import './App.css'
import Calculator from './component/Calculator';
import { themeData } from './component/themeData';

function App() {

  const [theme, setTheme] = useState(0);
  const [themeClr, setThemeClr] = useState({})


  useEffect(() => {
    setThemeClr(themeData[theme])
  }, [theme, themeClr])



  return (
    <div className='container' style={{ '--bg-body': themeClr['--bg-body'] }}>
      <Calculator
        theme={theme}
        setTheme={setTheme}
        themeClr={themeClr} />
    </div>
  )
}

export default App
