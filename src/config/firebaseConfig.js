import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" // trae nuestra base de datos a nuestra app

const firebaseConfig = {
    apiKey: "AIzaSyBRxd9nG-Ixmg1LYOnwwVRpRErw6BXQObI",
    authDomain: "base-de-datos-grondona.firebaseapp.com",
    projectId: "base-de-datos-grondona",
    storageBucket: "base-de-datos-grondona.appspot.com",
    messagingSenderId: "660922682275",
    appId: "1:660922682275:web:8595fa81bd8a6e8db92816"
}

// Inicializar Firebase

const app = initializeApp(firebaseConfig)

// Exportar la base de datos a toda la app

export const db = getFirestore (app)