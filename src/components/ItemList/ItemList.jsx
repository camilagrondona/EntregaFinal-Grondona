import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
    return (
        <div className="container"> 
            {products.map( product => <Item key={product.id} {...product}  />)}
        </div>
    )
}
