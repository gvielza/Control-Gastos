import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupeusto}) => {
    return (
        <header>
        <h1>
           Planificador de Gastos  </h1>
           {isValidPresupuesto ? (
           <p>Control Presupuesto</p>
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