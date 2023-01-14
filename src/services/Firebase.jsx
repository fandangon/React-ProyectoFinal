import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCJrAodjJnZwfgSySiWlfw0apqtTbxJYp0",
    authDomain: "reactjs-hosch-proyectofinal.firebaseapp.com",
    projectId: "reactjs-hosch-proyectofinal",
    storageBucket: "reactjs-hosch-proyectofinal.appspot.com",
    messagingSenderId: "575683343827",
    appId: "1:575683343827:web:39503d4bfc0800a4e92b26"
  };


const app = initializeApp(firebaseConfig);
const BaseDatos = getFirestore(app)

export default BaseDatos