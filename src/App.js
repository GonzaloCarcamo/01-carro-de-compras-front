import { Component } from 'react'
import Productos from './componentes/Productos.js'
import Layout from './componentes/Layout.js'
import Title from './componentes/Title.js'
import Navbar from './componentes/Navbar.js'

class App extends Component {
  state = {
    productos: [
      {nombre: 'tomates', precio: 500, img: '/productos/tomate.jpg'},
      {nombre: 'arbejas', precio: 300, img: '/productos/arbejas.jpg'},
      {nombre: 'lechuga', precio: 500, img: '/productos/lechuga.jpg'},
    ],
    carro: [],
    carroCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.nombre === producto.nombre)){
      const nuevoCarro = carro.map(x => x.nombre === producto.nombre 
        ? ({
          ...x, cantidad: x.cantidad + 1}) 
        : x)
        return this.setState({ carro: nuevoCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }

  render(){
    const { esCarroVisible } = this.state
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App
