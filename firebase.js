import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8R55MCRgCjwi8aH-vLiP3IOCJS_Cnkjw",
  authDomain: "love-store-app.firebaseapp.com",
  projectId: "love-store-app",
  storageBucket: "love-store-app.firebasestorage.app",
  messagingSenderId: "878435294971",
  appId: "1:878435294971:web:fb707658a1ee955f0a9a5e"
};

const app = initializeApp(firebaseConfig);

export { app };