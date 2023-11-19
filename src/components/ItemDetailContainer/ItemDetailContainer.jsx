import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        getProductById(id)
            .then((resp) => {
                setItem(resp)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })

    }, [])

    return (

        <>
            {isLoading ? <h2> Cargando detalles del producto...</h2> : item && <ItemDetail {...item} />}
        </>
    )
}
