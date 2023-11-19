import { Link } from "react-router-dom";

export const Item = ({ id, name, image, description, price }) => {
    return (
        <div className="border m-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={image} alt="" />
                    <p className="card-text"> {description} </p>
                    <b className="card-text"> Precio: {price} </b>
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-outline-success">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}