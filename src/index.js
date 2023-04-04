document.addEventListener("DOMContentLoaded", () => {

    fetch(" http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayDogBar(data)
    })

})



function displayDogBar(data){ 
    data.forEach(dog => {
      //  dogBar.innerHTML += `<span data-id = ${dog.id} > ${dog.name} </span>` 
         
        let dogBar = document.getElementById("dog-bar")
        let span = document.createElement("span")
            span.setAttribute("data-id", dog.id)
            span.innerText = dog.name 
            dogBar.appendChild(span)

        span.addEventListener("click", () => {
           // console.log("click")
           let dogInfo = document.getElementById("dog-info")
                
                dogInfo.innerHTML += `
                    <img src= ${dog.image} />
                    <h2>${dog.name}</h2>
                    <button>${dog.isGoodDog} </button>
                `
                let button = dogInfo.querySelector("button") 

                if(dog.isGoodDog === true) {
                    button.innerText = "Good Dog"
                } else { 
                    button.innerText = "Bad Dog"
                }
        })
    });  
    
}


