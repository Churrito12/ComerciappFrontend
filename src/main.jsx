import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-WWxhstdL4bZ6Bvc4ZaK8LwZz8aqoJAU",
  authDomain: "comerciapp-52693.firebaseapp.com",
  projectId: "comerciapp-52693",
  storageBucket: "comerciapp-52693.appspot.com",
  messagingSenderId: "690409595209",
  appId: "1:690409595209:web:9099359eefdb8c128a3a98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
