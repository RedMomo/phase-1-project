document.addEventListener("DOMContentLoaded", function(searchBarEvent) {
let surpriseMe = document.getElementById("surprise-me")
surpriseMe.innerText = "Surprise Me!"
surpriseMe.addEventListener("click", (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books => {
        console.log(books[0].title, books[0].author, books[0].description)
    })
        })


let searchBar = document.getElementById("search-form")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    e.target[0].value
    console.log(e.target[0].value)
    // fetch("http://localhost:3000/books")
    // books.map(book => {
        
    // })


    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books => {
    // console.log(books, 'Fetching books!')
    
    books.forEach(book => {
        renderBooks(book)
        
    })
    
})
});

const renderBooks = (book) => {
    // for(let i=0 ;i < 3 ; i++){
    let bookContainer = document.getElementById("book-container")
    let bookCard = document.createElement("div")
    bookCard.classList.add("card")
    bookCard.innerText = book.title
    bookContainer.append(bookCard)

    bookCard.addEventListener("mouseover", showCard)
    bookCard.addEventListener("mouseleave", blurCard)
    
    // }
    };

    function showCard() {
        this.classList.add("active")
    }
    function blurCard() {
        this.classList.remove("active")
    }

    
});



// book generating button
// let surpriseMe = document.getElementById("surprise-me")
// surpriseMe.innerText = "Surprise Me!"
// surpriseMe.addEventListener("click", (e) => {
//     e.preventDefault()
//     fetch("http://localhost:3000/books")
//     .then(res => res.json())
//     .then(books => {
//         console.log(books.title, books.author, books.description)
// })
//     })


// the equation for the loop?
// for(let i=0 ;i < 3 ; i++){
//     
//  }








