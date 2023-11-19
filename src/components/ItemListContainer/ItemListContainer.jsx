import styles from "./container.module.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../asyncMock"

export const ItemListContainer = () => {
    const { category } = useParams()

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getProducts()
            .then((resp) => {
                if (category) {
                    const productsFilter = resp.filter((product) => product.category === category)
                    // Verificar si hay productos filtrados antes de actualizar el estado
                    if (productsFilter.length > 0) {
                        setProducts(productsFilter)
                    } else {
                        // Si no hay productos filtrados, mantener la lista original
                        setProducts(resp)
                    }
                } else {
                    // Si no hay categoría seleccionada, mostrar todos los productos
                    setProducts(resp)
                }
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
    }, [category]) // si el parámetro recibe una modificación, se ejecuta nuevamente el useEffect

    return (
        <>
            {isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}
        </>
    )
}