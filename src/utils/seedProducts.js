import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

const products = [
    {
        name: "Funko Pop! Marvel Avengers - Ironman",
        price: "30990",
        image: "https://i.imgur.com/9gdVdYf.jpeg",
        category: "marvel",
        description: "Funko de Ironman, de la colección de Marvel Avengers. Con una altura aproximada de 9,5 cm, esta mini figurita de vinilo complementa otros artículos de colección y encaja perfectamente en tu vitrina o en tu escritorio.",
        stock: 4
    },
    {
        name: "Funko Pop! Marvel Avengers - Spiderman No Way Home",
        price: "30990",
        image: "https://i.imgur.com/jYdXFOz.jpeg",
        category: "marvel",
        description: "Funko de Spiderman, No Way Home, de la colección de Marvel Avengers. Ideal para fiestas, cumpleaños u ocasiones especiales y como regalo esta exclusiva figurita es un complemento imprescindible en cualquier colección de merchandising de Spiderman No Way Home.",
        stock: 6
    },
    {
        name: "Funko Pop! Marvel Guardianes de la Galaxia 3 - Groot",
        price: "30990",
        image: "https://i.imgur.com/VM5zDWl.jpeg",
        category: "marvel",
        description: "Funko de Groot, de la colección de Marvel Guardianes de la Galaxia 3. Fabricado en vinilo duradero de alta calidad, este coleccionable está hecho para durar y soportar el desgaste diario.",
        stock: 8
    },
    {
        name: "Funko Pop! Marvel Wanda Vision - Vision 50s Blanco y Negro",
        price: "44000",
        image: "https://i.imgur.com/pEyTbYz.jpeg", 
        category: "marvel",
        description: "Funko de Vision, de los 50s en blanco y negro, de la colección de Marvel Wanda Vision. Con una altura aproximada de 9,5 cm, esta mini figurita de vinilo complementa otros artículos de colección y encaja perfectamente en tu vitrina o en tu escritorio.",
        stock: 10
    },
    {
        name: "Funko Pop! Avatar The Way of the Water - Jake Sully",
        price: "30990",
        image: "https://i.imgur.com/oHsB3Sl.jpeg",
        category: "avatar",
        description: "Funko Jake Sully, de la colección de películas de Avatar (The Way of the Water). Fabricado en vinilo duradero de alta calidad, este coleccionable está hecho para durar y soportar el desgaste diario, garantizando un disfrute duradero tanto para los fans como para los coleccionistas.",
        stock: 12
    },
    {
        name: "Funko Pop! Harry Potter - Dobby",
        price: "30990",
        image: "https://i.imgur.com/rIWKnz3.jpeg",
        category: "harry-potter",
        description: "Funko de Dobby, de la colección de Harry Potter. Ideal para fiestas, cumpleaños u ocasiones especiales y como regalo esta exclusiva figurita es un complemento imprescindible en cualquier colección de merchandising de la saga de Harry Potter.",
        stock: 14
    },
    {
        name: "Funko Pop! Harry Potter - Harry con Hedwig Plataforma 9 3/4",
        price: "46000",
        image: "https://i.imgur.com/xRAPz8I.jpeg",
        category: "harry-potter",
        description: "Funko de Harry con Hedwig Plataforma 9 3/4, de la colección de la saga de Harry Potter. Con una altura aproximada de 9,5 cm, esta mini figurita de vinilo complementa otros artículos de colección y encaja perfectamente en tu vitrina o en tu escritorio.",
        stock: 16
    },
    {
        name: "Funko Pop! Suicide Squad - Harley Quinn",
        price: "30990",
        image: "https://i.imgur.com/YjqHdYw.jpeg",
        category: "suicide-squad",
        description: "Funko de Harley Quinn, de la colección de Suicide Squad. Con una altura aproximada de 9,5 cm, esta mini figurita de vinilo complementa otros artículos de colección y encaja perfectamente en tu vitrina o en tu escritorio.",
        stock: 18
    },
]

export const seedProducts = () => {
    products.forEach((product) => {
        addDoc(collection(db, "products"), product)
    })
}

