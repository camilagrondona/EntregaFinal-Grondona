import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ description, image, price, stock, name }) => {

    const onAdd = (items) => {
        alert(`Se agregaron ${items} al carrito`)
    }

    return (
        <div className="border m-2">
            <div className="card mx-auto" style={{ width: "50%" }}>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <img src={image} alt="" className="img-fluid m-4" />
                    <p className="card-text"> {description} </p>
                    <b>Precio: {price} </b>
                    <div className="my-4">
                        <ItemCount stock={stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}