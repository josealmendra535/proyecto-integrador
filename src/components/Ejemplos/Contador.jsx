import { useState } from "react"
import ContadorView from "./ContadorView"

const Contador = () => {
    const [contador, setContador] = useState(0);
    // const [ ] = useState()

//    let contador = 0

    const aumentarContador = ()=> {
        // contador = contador + 1
//        console.log(contador)
        setContador( contador + 1 )
    }

    return(
        <ContadorView contador={contador} aumentarContador={aumentarContador} />

    )
}
export default Contador