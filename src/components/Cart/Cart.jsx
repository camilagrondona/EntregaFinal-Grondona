import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2"; 

export const Cart = () => {
    const navigate = useNavigate()
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
        <div className="container mt-5">
            <h2>Carrito</h2>
            <div className="mb-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="border p-3 mb-3">
                        <p className="mb-1">Nombre: {item.name}</p>
                        <p className="mb-1">Precio unitario: ${item.price}</p>
                        <p className="mb-1">Cantidad: {item.quantity}</p>
                        <p className="mb-1">Subtotal: ${item.subTotal}</p>
                        <div className="mb-2">
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Quitar</button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Añadir</button>
                        </div>
                        <button onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <p className="fw-bold">Suma total del carrito ${totalCartItems}</p>

            <button onClick={handleConfirmOrder}>Confirmar Compra</button>
        </div>
    )
}