//-------------------------Evento del Click---------------//
document.getElementById("boton").addEventListener("click", () => {
    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;

    let data = {
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
});


