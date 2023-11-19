import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ description, image, price, stock, name }) => {

    const onAdd = (items) => {
        alert(`Se agregaron ${items} al carrito`)
    }

    return (
        <div className="border m-2">
            <div className="card ">
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <img src={image} alt="" />
                    <p className="card-text"> {description} </p>
                    <b>Precio: {price} </b>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}