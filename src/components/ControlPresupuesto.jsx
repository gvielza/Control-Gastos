import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos ,setGastos,setPresupuesto,setIsValidPresupeusto}) => {
    const [disponible, setDisponible] = useState(presupuesto);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado
        //Calcular el porcentaje gastado ...toFixed cantidad de decimales a retornar
        const nuevPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

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
    const handleReset=()=>{
        const resultado= confirm('Desea resetear los datos?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupeusto(false)
        }
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={porcentaje}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626':'#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor:porcentaje > 100 ? '#DC2626':'#3B82F6'
                    })}
                    text={`${porcentaje}%`} Gastado
                ></CircularProgressbar>

            </div>
            <div className='contenido-presupuesto'>
                <button className='reset-app' type='button' onClick={handleReset}>Resetear APP</button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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