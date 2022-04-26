import { useState,useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBTN from '../img/cerrar.svg'

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {
    const [mensaje,setMensaje]=useState('');
    const[nombre,setNombre]=useState('');
    const[cantidad,setCantidad]=useState('');
    const[categoria,setCategoria]=useState('');
    const [id,setId]=useState('');
    const[fecha,setFecha]=useState('');
    

    useEffect(()=>{
        if (Object.keys(gastoEditar).length>0) {
          setNombre(gastoEditar.nombre)
          setCantidad(gastoEditar.cantidad)
          setCategoria(gastoEditar.categoria)
          setId(gastoEditar.id)
          setFecha(gastoEditar.fecha)
        }
    
      },[])

    const OcultarModal=()=>{
        setModal(false);
        setAnimarModal(false);
        setGastoEditar({})
        setTimeout(() => {
            setModal(false);
        }, 500);
      
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
           setMensaje("Los campos no pueden estar vacíos");
           setTimeout(() => {
               setMensaje('');
           }, 3000);
            
        }
        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBTN} alt="Boton Cerrar" onClick={OcultarModal}/>
            </div>
            <form  className={`formulario ${animarModal?"animar":'cerrar'}`} action=""
            onSubmit={handleSubmit}>
                <legend>{gastoEditar.nombre?"Editar Gasto":"Nuevo Gasto"}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className='campo'>
    <label htmlFor="nombre">Nombre  Gasto</label>
     <input type="text" placeholder='Añade el nombre del Gasto' id='nombre'
      value={nombre} onChange={e=>setNombre(e.target.value)}/>
                </div>
                
                <div className='campo'>
    <label htmlFor="cantidad">Cantidad  Gasto</label>
     <input type="number" placeholder='Añade la Cantidad del gasto; ej:300' id='cantidad'
      value={cantidad} onChange={e=>setCantidad(Number(e.target.value))}/>
                </div>
               
                <div className='campo'>
    <label htmlFor="categoria">Categoría</label>
     <select name="" id="categoria"  value={categoria} onChange={e=>setCategoria(e.target.value)}>
<option value="">--Seleccione</option>
<option value="ahorro">Ahorro</option>
<option value="comida">Comida</option>
<option value="casa">Casa</option>
<option value="gastos">Gastos Varios</option>
<option value="ocio">Ocio</option>
<option value="salud">Salud</option>
<option value="suscripciones">Suscripciones</option>
     </select>
                </div>
                <input type="submit" value={gastoEditar.nombre?"Guardar Cambios":"Añadir Gasto" }/>
            </form>
        </div>
    );
};

export default Modal;