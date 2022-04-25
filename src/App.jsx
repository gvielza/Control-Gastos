import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import {generateId} from './components/helpers/index'
import ListadoGastos from './components/ListadoGastos';


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto,setIsValidPresupeusto]=useState(false);
  const [modal, setModal]=useState(false);
  const [animarModal, setAnimarModal]=useState(false);
  const[gastos,setGastos]=useState([]);
  

  const handleNuevoGasto=()=>{
setModal(true);
setTimeout(() => {
  setAnimarModal(true);
}, 500);
  }
  const guardarGasto=(gasto)=>{
    gasto.id=generateId();
    setGastos([...gastos, gasto]);
    }
  return (
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupeusto={setIsValidPresupeusto}
      />
      {isValidPresupuesto&&(
      <>
      <main><ListadoGastos 
      gastos={gastos}/></main>
      <div className='nuevo-gasto'>
<img src={IconoNuevoGasto} alt="Icono Nuevo Gasto" onClick={handleNuevoGasto}/>
      </div></>)}


     {modal&&<Modal setModal={setModal}
     animarModal={animarModal}
     setAnimarModal={setAnimarModal}
     guardarGasto={guardarGasto}
     />} 
    </div>

  )
}

export default App
