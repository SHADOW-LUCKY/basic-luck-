import React from 'react'
import './carrito.css'
import Productos from './Productos(all).jsx'

const Carrito = ({carro,editcarro}) => {
    return ( 
        <div className='carrito'>
            <h2>tu carrito de compras</h2>
            {carro.length === 0
            ?
                <h2>no hay elementos aqui</h2>
            :carro.map(producto=>(
                <Productos 
                key={producto.id}
                producto={producto}
                carro={carro}
                editcarro={editcarro}
                />
            ))      
            }
        </div>
     );
}
 
export default Carrito;