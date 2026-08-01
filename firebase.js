const firebaseConfig = {
  apiKey: "AIzaSyC8R55MCRgCjwi8aH-vLiP3IOCJS_Cnkjw",
  authDomain: "love-store-app.firebaseapp.com",
  projectId: "love-store-app",
  storageBucket: "love-store-app.firebasestorage.app",
  messagingSenderId: "878435294971",
  appId: "1:878435294971:web:fb707658a1ee955f0a9a5e"
};

firebase.initializeApp(firebaseConfig);

window.db.collection("loveStore").get()
.then((snapshot) => {

    alert("Документов: " + snapshot.size);

    snapshot.forEach(doc => {
        alert(doc.id + " -> " + JSON.stringify(doc.data()));
    });

})
.catch(e => {
    alert(e.message);
});