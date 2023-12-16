import { BsCart3 } from "react-icons/bs"
import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <Link to="/cart">
            <div className="d-flex">
                <BsCart3 color="#58ACFA" size={30} />
                <span>({totalQuantity})</span>
            </div>
        </Link>
    )
}
