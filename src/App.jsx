import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generateId } from './components/helpers/index'
import ListadoGastos from './components/ListadoGastos';
import Filtros from './components/Filtros';



function App() {
  //muestro si hay gastos sino, arreglo vacio
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  //guardo si hay un presupuesto sino en 0
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidPresupuesto, setIsValidPresupeusto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrado, setGastosFiltrado] = useState([]);

  //guardando en LocalStorage
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])
  //almacenar los gastos en LS , no puede ser arreglo por tanto, se convierte a JSON
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])
  //cambiar a la 2da pantalla si ya hay un presupuesto definido(salir de la pantalla inicial)
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuesto > 0) {
      setIsValidPresupeusto(true)
    }
  }, [])
  //filtrar por categoria
  useEffect(() => {
    if(filtro){
     //Filtrar gastos por categorías(implicito return de )
     const gastosFiltrados=gastos.filter(gasto=>gasto.categoria===filtro)
     setGastosFiltrado(gastosFiltrados)
    }
  }, [filtro])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }

  }, [gastoEditar])

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupeusto={setIsValidPresupeusto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}/>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto} 
              filtro={filtro}
              gastosFiltrado={gastosFiltrado}
              /></main>
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
