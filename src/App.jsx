import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto,setIsValidPresupeusto]=useState(false);

  return (
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupeusto={setIsValidPresupeusto}
      />
    </div>
  )
}

export default App
