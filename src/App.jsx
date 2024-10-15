import NavBar from './components/NavBar'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import './App.css'
import banner from "./assets/banner.png"
import Contador from './components/Ejemplos/Contador'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo"} />

      <img src={banner} alt=""width={100} />
      <Contador />
    </div>
  )
}

export default App
