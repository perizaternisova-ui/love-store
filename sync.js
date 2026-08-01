async function syncFromFirebase() {

    const doc = await db.collection("loveStore")
        .doc("main")
        .get();

    if (!doc.exists) return;

    const data = doc.data();

    if (data.loveBalance !== undefined) {
        localStorage.setItem("loveBalance", data.loveBalance);
    }

}

async function syncToFirebase() {

    await db.collection("loveStore")
        .doc("main")
        .set({

            loveBalance: Number(localStorage.getItem("loveBalance")) || 0

        }, { merge: true });

}