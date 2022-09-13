# Phase-1 Final Project: Book Recommender

## Application Pitch
We will be creating a basic book recommending application. Users will search for a book feature (i.e.: genre) and the application will return three recommendations, selected at random from the API. Alternatively, the user can press a "surprise me!" button that will return a recommendation completely at random. 

## MVP Core Features

### Structure
The application will be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API will be handled asynchronously and use JSON as the communication format. Additionally, it will run on a single page. 

### Event-Listeners
The application will utilize three unique event-listeners:

#### Mouse Events: 
The user will be able to interact with the application by hovering over or clicking the book recommendations with their mouse. By hovering, the book recommendations will fade-in from greyed out to clear. By clicking, the user can obtain additional information about the books.  

#### CSS Transition: 
Recommendations will appear as faded cards until the mouse pointer hovers over the card. Then, the card will fade into view.

#### Form Events: 
The user will be able to search for books by submitting a form, which will reset after a search is completed. 

### Array Iteration
The application will utilize the ".forEach" array iteration to present the book recommendations. 

### Stretch Goals
We hope to include additional features in the future, such as the ability to like and review book recommendations, add them to a reading list, and recieve information on where to purchase recommended books with the click of a "where to purchase" button.

## API
For this application, we will be using the Open Library API (https://openlibrary.org/developers/api). We will access the API to search for books (both at random or by specific user-selected criteria) and present recommendations (with titles, authors, genres, summaries, and book covers).

## Expected Challenges
Over the course of this project, we will have to work together to figure out how to structure the HTML, create an appealing webpage via the CSS stylesheet, and implement the planned click-events--particularly the fade-in feature, which neither of us have done before.

## On Meeting Requirements
To meet the requirements, we will communicate virtually (through phone, text, and facetime) to divide up research tasks. Then, we will structure and implement the code via pair programming, where one is the driver and the other is the navigator for that session. # phase-1-project
