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


//transition functions
