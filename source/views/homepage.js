document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if(!user){
        location.href = "/index.html";
    }

    document.getElementById("delete").addEventListener("submit", (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        fetch("http://localhost:9000/users/delete", {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                localStorage.removeItem("user");
                location.href = "/tilmeld.html";
            }
        })
        .catch(() => {
            window.alert("Der skete en fejl");
        });
    });
});

document.addEventListener("DOMContentLoaded", (event) =>{
    document.getElementById("logout").addEventListener("submit", (event) => {
        event.preventDefault();   

    fetch('http://localhost:9000/users/logout', {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((response) => {
        if (response){
            localStorage.removeItem("user");
            location.href = "/index.html";
        }
    })
    .catch(() => {
        window.alert("Error");
    });
    });
});



let form = document.getElementById("submitForm");
form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData(form);

    await fetch('http://localhost:9000/item', {
        method: 'POST',
        body: formData
    });
});

let refresh = document.getElementById('refresh');
let list = document.getElementById('list');
refresh.addEventListener('click', async () => {
    list.innerHTML = `
    <tr>
    <th>Title</th>    
    <th>Price</th>   
    <th>Brand</th>   
    <th>Image</th>  
    <tr/>
    `;
    await fetch('http://localhost:9000/items', {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);

        res.forEach((e) => {
            list.innerHTML += `
            <tr>
                <td>${e.title}</td>  
                <td>${e.price}</td>      
                <td>${e.brand}</td>     
                <td><img src="${e.thumbnail}" style="height:100px;width:100px;"/></td>      
            <tr/>
            `;
        });

    })
});
