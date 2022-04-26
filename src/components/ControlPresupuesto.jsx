import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
    const [disponible, setDisponible] = useState(presupuesto);
    const [gastado, setGastado] = useState(0);
    const [porcentaje,setPorcentaje]=useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado
        //Calcular el porcentaje gastado ...toFixed cantidad de decimales a retornar
        const nuevPorcentaje=(((presupuesto-totalDisponible)/presupuesto)*100).toFixed(2)
       
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(nuevPorcentaje);
        }, 1500);

    }, [gastos])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })


    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={porcentaje}
                styles={buildStyles({
                    pathColor:'#3B82F6',
                    trailColor:'#F5F5F5'
                })}
                text={`${porcentaje}%`}Gastado
                ></CircularProgressbar>

            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>

            </div>
        </div>
    );
};

export default ControlPresupuesto;