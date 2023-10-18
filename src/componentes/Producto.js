import { Component } from "react";
import Button from './Button.js'
const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render(){
        const { producto, agregarAlCarro } = this.props
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.nombre}/>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>

                <Button
                    onClick={() => agregarAlCarro(producto)}
                >Agregar al Carro</Button>
            </div>
        )
    }
}

export default Producto