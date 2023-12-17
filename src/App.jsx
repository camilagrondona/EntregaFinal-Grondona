import { NavBar, ItemListContainer, ItemDetailContainer, Cart, Order } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import { FirebaseContextProvider } from "./context/FirebaseContext"

export const App = () => {

  return (
    <BrowserRouter>
      <FirebaseContextProvider>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmar-compra" element={<Order/>} />
          </Routes>
        </CartContextProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  )
}
