import React from 'react';
import { Link } from 'react-router-dom';
import CarritoElements from './CarritoElements';
import { dataContext } from '../context/DataContext';
import Swal from 'sweetalert2';
import CarritoVacio from './CarritoVacio';


export default function CarritoContents() {
    const {librosDelCarrito, setLibrosDelCarrito} = useContext(dataContext);

    if(librosDelCarrito.length === 0) {
        return <CarritoVacio/>
    }

    const vaciaCarrito = () => {
        Swal.fire({
            icon: 'question',
            title: '¿Esta seguro que desea vaciar el contenido del carrito de compras?',
            buttons: true,
            showConfirmButton: true,
            dangerMode: true,
        })
        .then((results) => {
            if(results.isConfirmed){
                setLibrosDelCarrito([]);
                return;
            }
        })
    }

    const formatoNumero = (number) => {
        return new Intl.NumberFormat().format(number)
    }

    const precioTotalCarrito = librosDelCarrito.reduce((a,b) => a + b.precioCarrito, 0)

    return(
        <div>
            CarritoContext
        </div>
    )
}