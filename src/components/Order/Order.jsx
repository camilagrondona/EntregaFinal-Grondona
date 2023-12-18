import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";
import Swal from "sweetalert2";

    export const Order = () => {
        const { addOrderDB } = useContext(FirebaseContext)
        const { cartItems, totalCartItems } = useContext(CartContext)

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    })

    const handlePlaceOrder = async () => {
        const orderId = await addOrderDB(cartItems, userData, totalCartItems)
    /////////////////////////////ESTA ALERTA NO ANDA//////////////////////////////
        Swal.fire({
            icon: 'success',
            title: 'Orden realizada con éxito',
            showConfirmButton: false,
            timer: 1500,
        })
    
        console.log("Order ID:", orderId)
    }

    const handleFormChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h2 className="text-primary m-2">Datos del cliente</h2>

            <Form
                userData={userData}
                onFormChange={handleFormChange}
                onPlaceOrder={handlePlaceOrder}
                cartItems={cartItems}
                total={totalCartItems}
            />
        </div>
    )
}
