import { BsCart3 } from "react-icons/bs"
import { useCart } from "../../context/CartContext"

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
            <div className="d-flex">
                <BsCart3 color="#58ACFA" size={30} />
                <span>({totalQuantity})</span>
            </div>
    )
}
