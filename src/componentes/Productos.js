import { Component } from 'react'
import Producto from './Producto.js'

const estilos = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render(){
        const { productos, agregarAlCarro } = this.props
        return(
            <div style={estilos.productos}>
                {productos.map(producto => 
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }
}

export default Productos