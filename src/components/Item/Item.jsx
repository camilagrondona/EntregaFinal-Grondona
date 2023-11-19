import { Link } from "react-router-dom";

export const Item = ({ id, name, image, description, price }) => {
    return (
        <div className="border m-2">
            <div className="card mx-auto" style={{ width: "50%" }}>
                <div className="card-body text-center">
                    <h5 className="card-title display-6">{name}</h5>
                    <img src={image} alt="" className="img-fluid m-4" />
                    <p className="card-text">{description}</p>
                    <b className="card-text">Precio: {price}</b>
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-outline-success m-4">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};