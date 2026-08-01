const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "love-store-app",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();