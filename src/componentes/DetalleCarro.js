import { Component } from "react";

const styles = {
    detalle: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        width: '300px',
        right: 50,
        borderRadius: '5px'
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA'
    },
}

class DetalleCarro extends Component {
    render(){
        const { carro } = this.props
        console.log(carro)
        return(
            <div style={styles.detalle}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li key={x.nombre} style={styles.producto}>
                        <img alt={x.nombre} src={x.img} width='50' height='32'/>
                        {x.nombre} <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetalleCarro