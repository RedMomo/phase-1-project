document.addEventListener("DOMContentLoaded", function() {
    const randomBeerContainer = document.getElementById("random-beer-container")
    let surpriseMe = document.getElementById("surprise-me")
    surpriseMe.innerText = "Prost!"
    surpriseMe.addEventListener("click", () => {
        fetch("https://api.punkapi.com/v2/beers/random")
        .then(res => res.json())
        .then(beers => {
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
        randomBeerContainer.append(beerCard)
        
    
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
