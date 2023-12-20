import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, image, price, stock }) => {
    const { addItem } = useCart()

    // Agregar productos al carrito

    const onAdd = (items) => {
        addItem({
            id,
            name,
            description,
            image,
            price,
        }, items)

        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
        })
    }

    return (
        <div className="m-2">
            <div className="card mx-auto" style={{ width: "50%" }}>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <img src={image} alt="" className="img-fluid m-4" />
                    <p className="card-text"> {description} </p>
                    <b>Precio: ${price} </b>
                    <div className="my-4">
                        <ItemCount stock={stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}