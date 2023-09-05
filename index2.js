//-------------------------Evento del Click---------------//
function enviarSolicitud() {
    const nombre = document.getElementById("nombres").value;
    const apellido = document.getElementById("apellidos").value;
    const fechaNacimiento = document.getElementById("fechaDeNacimiento").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };
//------------------------------------------------------Metodo Post-------------------------------//
fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(responseData => {
    console.log(responseData);
})
.catch(error => {
    console.error("Error:", error);
});
}