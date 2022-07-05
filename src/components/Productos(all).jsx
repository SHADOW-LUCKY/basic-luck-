import React from 'react'

const Productos = ({producto,carro,editcarro,productos}) => {
    const{nombre ,id ,precio}=producto
    //productos en el carro
    const Seleccionarproducto = () => {
        const producto = productos.filter(producto => producto.id === id)[0]
        editcarro([
            ...carro,producto
        ])
    }
    //elimina las weas del carro
    const Eliminarproducto = () =>{
        const productos =carro.filter(producto=> producto.id!==id)
        //colocar todo en el state
        editcarro(productos)
    }
    return ( 
<div>    
<h1>{nombre}</h1> 
    <p>${precio}</p>
    {productos
     ? (
        <button onClick={() => Seleccionarproducto(id)} type='button'>comprar</button>
     )
    
     :(
        <button onClick={() => Eliminarproducto(id)}type='button'>eliminar</button>
     )
     }
</div>
    );
}
export default Productos;