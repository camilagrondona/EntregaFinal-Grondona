import {NavBar} from "./components/NavBar/NavBar.jsx"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx"

export const App = () => {

  return (
<>
<NavBar/>
<ItemListContainer greeting = {"¡Te damos la bienvenida a Friki Planet!"} />
</>
  )
}
