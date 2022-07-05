import React, { Fragment, useState } from 'react'
import Header from './components/Header(up)'
import Footer from './components/Footer(down)'
import Productos from './components/Productos(all)'
import Carrito from './components/carrito(productos)'
function App() {
 //listado de productos
 const [productos, setproductos] = useState([
  { id: 1, nombre: 'camisa react', precio: 50 },
  { id: 2, nombre: 'camisa JSX', precio: 20 },
  { id: 3, nombre: 'camisa python', precio: 40 },
  { id: 4, nombre: 'camisa del boca', precio: 60 },
 ])
 //pal carrito
 const [carro, editcarro] = useState([])

 //fecha(año actual)
 const fecha = new Date().getFullYear()
 return (
  <div className='App'>
   <Fragment>
    <Header titulo='Tienda virtual' />
    <h1>lista de productos</h1>
    {productos.map((producto) => (
     <Productos
      key={producto.id}
      producto={producto}
      productos={productos}
      carro={carro}
      editcarro={editcarro}
     />
    ))}
    <Carrito carro={carro} editcarro={editcarro} />
    <Footer fecha={fecha} />
   </Fragment>
  </div>
 )
}

export default App
