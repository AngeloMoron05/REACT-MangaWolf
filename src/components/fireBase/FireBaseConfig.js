import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANNrPcCnWP_sgIJXu7raqovoUbs6t8iDI",
    authDomain: "ecommerce-76ffc.firebaseapp.com",
    projectId: "ecommerce-76ffc",
    storageBucket: "ecommerce-76ffc.appspot.com",
    messagingSenderId: "734487144188",
    appId: "1:734487144188:web:dee12b88fce967bbb49979",
    measurementId: "G-7Q5ZXSGBJP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { auth, provider };
  
