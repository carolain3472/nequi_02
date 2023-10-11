function guardar(){
    
    db.collection("usuarios").add({
        telefono: document.getElementById("telefono").value,
        password: document.getElementById("j_password").value,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("registro exitoso");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error en el registro")
    });
}


