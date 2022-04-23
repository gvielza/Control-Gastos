import CerrarBTN from '../img/cerrar.svg'

const Modal = ({setModal,animarModal,setAnimarModal}) => {
    const OcultarModal=()=>{
        setModal(false);
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBTN} alt="Boton Cerrar" onClick={OcultarModal}/>
            </div>
            <form  className={`formulario ${animarModal?"animar":'cerrar'}`} action="">
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
    <label htmlFor="nombre">Nombre  Gasto</label>
     <input type="text" placeholder='Añade el nombre del Gasto' id='nombre'/>
                </div>
                
                <div className='campo'>
    <label htmlFor="cantidad">Cantidad  Gasto</label>
     <input type="number" placeholder='Añade la Cantidad del gasto; ej:300' id='cantidad'/>
                </div>
               
                <div className='campo'>
    <label htmlFor="categoria">Categoría</label>
     <select name="" id="categoria">
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
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    );
};

export default Modal;