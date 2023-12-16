import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'; 

export const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContext)

    //Confirmar q el carrito tenga productos
    const handleConfirmOrder = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                title: "Carrito de compras vacio",
                text: "Por favor, agrega productos antes de finalizar la compra",
                icon: "error"
            })

        } else {
            navigate("/confirmar-compra")
        }
    }

    return (
        <div>
            <h2>Carrito</h2>
            <div>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <p>Nombre: {item.name}</p>
                        <p>Precio unitario: ${item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.subTotal}</p>
                        <div>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Agregar</button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Quitar</button>
                        </div>
                        <button onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <p>Suma total del carrito ${totalCartItems}</p>

            <button onClick={handleConfirmOrder}>Confirmar Compra</button>
        </div>
    )
}