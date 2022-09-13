document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/books")
.then(res => res.json())
.then(books => {
    console.log(books, 'Fetching books!')

    books.forEach(book => {
        renderBooks(book)
    })
});

const renderBooks = (book) => {
    let bookContainer = document.getElementById("book-container")
    let bookCard = document.createElement("div")
    bookCard.classList.add("card")
    bookCard.innerText = book.title
    bookContainer.append(bookCard)

    bookCard.addEventListener("mouseover", showCard)
    bookCard.addEventListener("mouseleave", blurCard)
    
    };

    function showCard() {
        this.classList.add("active")
    }
    function blurCard() {
        this.classList.remove("active")
    }

    
});


//search bar
let searchBar = document.getElementById("search-form")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    e.target[0].value
    console.log(e.target[0].value)
    // fetch("http://localhost:3000/books",
    //     method: "GET"
    //     headers: 
    // )
})



// book generating button
let surpriseMe = document.getElementById("surprise-me")
surpriseMe.innerText = "Surprise Me!"
surpriseMe.addEventListener("click", (e) => {
    e.preventDefault()
    let randomBook = document.createElement("div")
    randomBook.classList.add("card")
    bookContainer.append(randomBook)
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books => {
        let title = books[1].title
        let author = books[1].author
        let description = books[1].description
        
        console.log(title, author, description)
})
    })


//the equation for the loop?
// for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";

//     }
//   }
// }








