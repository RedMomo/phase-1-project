document.addEventListener("DOMContentLoaded", function(searchBarEvent) {
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
    e.target[0].value
    console.log(e.target[0].value)
    // fetch("https://api.punkapi.com/v2/beers")
    // books.map(beers => {
        
    // })


    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => {
    console.log(beers, 'Fetching the wench!')
    
    beers.forEach(beer => {
        renderBeers(beer)
        
    })
    
})
});

const renderBeers = (beer) => {
    // for(let i=0 ;i < 3 ; i++){
    let beerContainer = document.getElementById("beer-container")
    let beerCard = document.createElement("div")
    beerCard.classList.add("card")
    beerCard.innerText = beer.name
    beerContainer.append(beerCard)

    beerCard.addEventListener("mouseover", showCard)
    beerCard.addEventListener("mouseleave", blurCard)
    
    // }
    };

    function showCard() {
        this.classList.add("active")
    }
    function blurCard() {
        this.classList.remove("active")
    }

    

})
