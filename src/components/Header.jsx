import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';


const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupeusto}) => {
    return (
        <header>
        <h1>
           Planificador de Gastos  </h1>
           {isValidPresupuesto ? (
           <ControlPresupuesto 
           presupuesto={presupuesto}/>
           ):(
               <NuevoPresupuesto
               presupuesto={presupuesto}
               setPresupuesto={setPresupuesto}
               setIsValidPresupeusto={setIsValidPresupeusto}
              />
           )}
       
        
        </header>
    );
};

export default Header;