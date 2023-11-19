import { CartWidget } from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4"> 
            <img src="/img/logo-friki-planet.png" alt="Logo de la marca: la estrella de la muerte con anillo de saturno y el nombre friki planet al frente" style={{ width: "200px" }} />
            <div>
                <Link to= "/">
                <button className= "btn btn-outline-info mx-2">Home</button>
                </Link >
                <Link to="/category/marvel">
                <button className= "btn btn-outline-info mx-2">Marvel</button>
                </Link>
                <Link to="/category/avatar"> 
                <button className= "btn btn-outline-info mx-2">Avatar</button>
                </Link>
                <Link to="/category/harry-potter">
                <button className= "btn btn-outline-info mx-2">Harry Potter</button>
                </Link>
                <Link to="/category/suicide-squad">
                <button className= "btn btn-outline-info mx-2">Suicide Squad</button>
                </Link>
            </div>
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </nav>
    )
}