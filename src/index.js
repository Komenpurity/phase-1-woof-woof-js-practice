document.addEventListener("DOMContentLoaded", () => {

    fetch(" http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayDogBar(data)
    })

})

let dogBar = document.getElementById("dog-bar")

function displayDogBar(data){ 
    data.forEach(dog => {
        dogBar.innerHTML += `<span data-id = ${dog.id} > ${dog.name} </span>`  
    });
    console.log(dogBar) 
}