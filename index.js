document.addEventListener("DOMContentLoaded", function() {
const randomBeerContainer = document.getElementById("random-beer-container")
let surpriseMe = document.getElementById("surprise-me")
surpriseMe.innerText = "Prost!"
surpriseMe.addEventListener("click", () => {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(beers => {
<<<<<<< HEAD
=======
        console.log(beers[0].name, beers[0].description, beers[0].image_url)
>>>>>>> 46676cef1bdbafb016f037bfa35684fd47c02153
        const randomBeerContainer = document.getElementById("random-beer-container").innerHTML = ""
        beers.forEach(beer => {
            randomBeers(beers) 
            
        })
    })

    let randomBeers = (beer) => {
    
    const randomBeerCard = document.createElement("div")
        randomBeerCard.classList.add("random-beer-card")
        // randomBeerCard.innerText = beer[0].name + beer[0].description

    const randomBeerImage = document.createElement("img")
        randomBeerImage.classList.add("random-beer-image")
        randomBeerImage.src = "download.jpg"

        randomBeerCard.append(randomBeerImage)
        randomBeerContainer.append(randomBeerCard)
        

        randomBeerCard.addEventListener("mouseover", showCard)
        randomBeerCard.addEventListener("mouseleave", blurCard)
            }
});
        
let searchBar = document.getElementById("search-form")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    // let beerContainer = document.getElementById("beer-container").innerHTML = ""
    randomBeerContainer.innerHTML = ""

    let url = "https://api.punkapi.com/v2/beers"
    //let searchBeer = `https://api.punkapi.com/v2/beers?beer_name=`


    if (e.target[0].value !== "" ){
        url = `https://api.punkapi.com/v2/beers?beer_name=${e.target[0].value}`
    }
    

    fetch(url)
    .then(res => res.json())
    .then(beers => {
    console.log(beers, 'Fetching the beers!')
    
    beers.forEach(beer => {
        renderBeers(beer)
    
    })
    
})
});


const renderBeers = (beer) => {
    // let beerContainer = document.getElementById("beer-container")
    let beerCard = document.createElement("div")
    beerCard.classList.add("card")
    beerCard.innerText = beer.name
<<<<<<< HEAD
    randomBeerContainer.append(beerCard)
    
=======
    beerContainer.append(beerCard)

// the below code doesnt work. 
    // let beerImg = document.createElement('img')
    //          beerImg.src = beer.image_url
    //          beerImg.append(randomBeerCard)


// const imageContainer = document.createElement('div')
//      imageContainer.classList.add('image-container')
//     const imageElemenet = document.createElement('img')
//      imageElemenet.setAttribute(beer.image_url)
//     imageContainer.append(card)

>>>>>>> 46676cef1bdbafb016f037bfa35684fd47c02153

    beerCard.addEventListener("mouseover", showCard)
    beerCard.addEventListener("mouseleave", blurCard)
    };

function showCard() {
    this.classList.add("active")
}
function blurCard() {
    this.classList.remove("active")
}

})
