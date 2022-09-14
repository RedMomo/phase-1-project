document.addEventListener("DOMContentLoaded", function() {
let surpriseMe = document.getElementById("surprise-me")
surpriseMe.innerText = "Surprise Me!"
surpriseMe.addEventListener("click", (e) => {
    e.preventDefault()
    
    
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(beers => {
        console.log(beers[0].name, beers[0].description)
        beers.forEach(beer => {
            randomBeers(beers) 
            
        })
    })

    let randomBeers = (beer) => {
    const randomBeerContainer = document.getElementById("random-beer-container")
    const randomBeerCard = document.createElement("div")
        randomBeerCard.classList.add("random-beer-card")
        randomBeerCard.innerText = beer[0].name
        randomBeerContainer.append(randomBeerCard)
        

        randomBeerCard.addEventListener("mouseover", showCard)
        randomBeerCard.addEventListener("mouseleave", blurCard)
            }
});
        
let searchBar = document.getElementById("search-form")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    

    fetch("https://api.punkapi.com/v2/beers/")
    .then(res => res.json())
    .then(beers => {
    console.log(beers, 'Fetching the beers!')
    
    beers.forEach(beer => {
        renderBeers(beer)
    
    })
    
})
});

const renderBeers = (beer) => {
    let beerContainer = document.getElementById("beer-container")
    let beerCard = document.createElement("div")
    beerCard.classList.add("card")
    beerCard.innerText = beer.name
    beerContainer.append(beerCard)
    

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
