document.addEventListener("DOMContentLoaded", (event) => {
const user = localStorage.getItem("user");
    if(!user){
        location.href = "/index.html";
    }

    document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const user = JSON.parse(localStorage.getItem("user"));
    event.preventDefault();

    fetch("http://localhost:9000/users/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(user),     
    })
    .then((response) => response.json())
    .then((response) => {
        if (response) {
            localStorage.removeItem("user");           
            location.href ="/index.html";
        }
    })
    .catch(() => {
        window.alert("Error")
    });
});
});

