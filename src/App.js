import { Component } from 'react'
import Productos from './componentes/Productos.js'

class App extends Component {
  state = {
    productos: [
      {nombre: 'tomates', precio: 500, img: '/productos/tomate.jpg'},
      {nombre: 'arbejas', precio: 300, img: '/productos/arbejas.jpg'},
      {nombre: 'lechuga', precio: 500, img: '/productos/lechuga.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <Productos 
          agregarAlCarro={() => console.log('no hace nada aun')}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App
