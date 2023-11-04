import { BsCart3 } from "react-icons/bs";

export const CartWidget = () => {
    return (
        <div className="d-flex">
            <BsCart3 color ="#58ACFA" size ={30}/>
            <p className = "mx-2">3</p>
        </div>
    )
}