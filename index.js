document.addEventListener("DOMContentLoaded", function() { //asynch question: do I need "load" because of how massive the api is?
    fetch("https://openlibrary.org/subjects/fiction.json?details=true") //might need to adjust link 
    .then(res => res.json())
    .then(books => {
        console.log(books, 'Fetching books!')
    
        books.forEach(book => {
            renderBooks(book)
        })
    
    const renderBooks = (subject) => { 
        const bookContainer = document.getElementById("container")
        const bookCard = document.getElementByClass("card")
        bookCard.innerText = subject.title
    }

    })
    });
