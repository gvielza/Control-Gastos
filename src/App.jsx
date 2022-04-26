import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generateId } from './components/helpers/index'
import ListadoGastos from './components/ListadoGastos';



function App() {
  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupeusto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }

  }, [gastoEditar])

const eliminarGasto=id=>{
const gastosActualizados=gastos.filter(gasto=>gasto.id!==id);
setGastos(gastosActualizados)
}
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }
  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //actualizar, recibo arreglo e itero con gastoState

      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }
    else {
      //agregar
      gasto.id = generateId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 500);



  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupeusto={setIsValidPresupeusto}
      />
      {isValidPresupuesto && (
        <>
          <main><ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar} 
            eliminarGasto={eliminarGasto}/></main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="Icono Nuevo Gasto" onClick={handleNuevoGasto} />
          </div></>)}


      {modal && <Modal setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>

  )
}

export default App
