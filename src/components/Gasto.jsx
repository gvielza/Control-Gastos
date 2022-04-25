import React from 'react';

const Gasto = ({gasto}) => {
    return (
        <div className='gasto sombra'>
          <div className='contenido-gasto'></div>
          <div className='descripcion-gasto'>
              <p className='categoria'>{gasto.categoria}</p>
          </div>
        </div>
    );
};

export default Gasto;