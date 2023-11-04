import { CartWidget } from "../CartWidget/CartWidget.jsx"

export const NavBar = () => {
    return (
        <nav className="d-flex justify-content-around p-4"> 
            <img src="/img/logo-friki-planet.png" alt="Logo de la marca: la estrella de la muerte con anillo de saturno y el nombre friki planet al frente" style={{ width: "200px" }} />
            <div>
                <button className= "btn btn-outline-info mx-2">Todos</button>
                <button className= "btn btn-outline-info mx-2">Marvel</button>
                <button className= "btn btn-outline-info mx-2">Peliculas</button>
                <button className= "btn btn-outline-info mx-2">Star Wars</button>
            </div>
            <CartWidget/>
        </nav>
    )
}