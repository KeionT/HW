
const userInput1 = document.getElementById("userInput")
const BrooklynButton = document.getElementById("Brooklyn")
//const userInput2 = document.getElementById("userInput2")
const BronxButton = document.getElementById("Bronx")
const ManhattanButton = document.getElementById("Manhattan")
const QueensButton = document.getElementById("Queens")
const StatenIslandnButton = document.getElementById("Staten Island")
const displayDescriptor = document.getElementById("displayDescriptor")

BrooklynButton.addEventListener("click", ()=>{ // two arguments inside event listener and first argument is command and the second is callback | function to run the code you want 
    let userInput2 = userInput1.value
    
    const Url1 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`
    
fetch(Url1)
    .then((res) => res.json()) // how the back end front end speak through api using https request in language json
    .then((data) => { 
        console.log(data)
        displayDescriptor.innerHTML = `<ul>`

        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li>${(data[i].descriptor)}</li>`
        displayDescriptor.innerHTML += `</ul>`
    })
  .catch((error) => {
    console.log(error);
    });
})

BronxButton.addEventListener("click", ()=>{
const Url2 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
let userInput2 = userInput1.value

fetch(Url2)
    .then((res) => res.json()) 
    .then((data) => { 
        console.log(data)
        displayDescriptor.innerHTML = `<ul>`

        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li>${(data[i].descriptor)}</li>`
        displayDescriptor.innerHTML += `</ul>`
    })
  .catch((error) => {
    console.log(error);
    });


})

manhattanButton.addEventListener("click", ()=>{
const Url3 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
let userInput2 = userInput1.value

fetch(Url3)
    .then((res) => res.json()) 
    .then((data) => { 
        console.log(data)
        displayDescriptor.innerHTML = `<ul>`

        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li>${(data[i].descriptor)}</li>`
        displayDescriptor.innerHTML += `</ul>`
    })
  .catch((error) => {
    console.log(error);
    });


})

queensButton.addEventListener("click", ()=>{
const Url4 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`
let userInput2 = userInput1.value

fetch(Url4)
    .then((res) => res.json()) 
    .then((data) => { 
        console.log(data)
        displayDescriptor.innerHTML = `<ul>`

        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li>${(data[i].descriptor)}</li>`
        displayDescriptor.innerHTML += `</ul>`
    })
  .catch((error) => {
    console.log(error);
    });


})

statenIslandButton.addEventListener("click", ()=>{
const Url5 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=StatenIsland`

let userInput2 = userInput1.value

fetch(Url5)
    .then((res) => res.json()) 
    .then((data) => { 
        console.log(data)
        displayDescriptor.innerHTML = `<ul>`

        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li>${(data[i].descriptor)}</li>`
        displayDescriptor.innerHTML += `</ul>`
    })
  .catch((error) => {
    console.log(error);
    });

})
