import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

export const Item = ({ id, name, image, description, price, stock }) => {

    const { addItem } = useCart()
    const onAdd = (items) => {
        addItem({
            id,
            name,
            price,
        }, items)

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
        })
    }

    return (
            <div className="border m-2">
                <div className="card mx-auto" style={{ width: "50%" }}>
                    <div className="card-body text-center">
                        <h5 className="card-title display-6">{name}</h5>
                        <img src={image} alt="" className="img-fluid m-4" />
                        <p className="card-text">{description}</p>
                        <b className="card-text">Precio: {price}</b>
                        <ItemCount stock={stock} onAdd={onAdd} />
                        <Link to={`/item/${id}`}>
                            <button className="btn btn-outline-success m-4">Detalles</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    