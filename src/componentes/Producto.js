import { Component } from "react";

class Producto extends Component {
    render(){
        const { producto } = this.props
        return(
            <div>
                <img src={producto.img} alt={producto.nombre}/>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
            </div>
        )
    }
}

export default Producto