import { useState } from "react"
import ContadorView from "./ContadorView"

const Contador = () => {
    console.log("Se monto o se actualizó el componente")
    const [contador, setContador] = useState(0);
    // const [ ] = useState()

//    let contador = 0

    const aumentarContador = ()=> {
if (contador < 10 ){
        setContador( contador + 1 )
        }
    }

    const fetchApi = () => {
        fetch("")
    }
    return(
        <ContadorView contador={contador} aumentarContador={aumentarContador} />

    )
}
export default Contador