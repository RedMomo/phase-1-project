# Phase-1 Final Project: Beer Recommender

## Application
"The Beer Garden" is a basic beer recommending application: users will search via the searchbar and the application will return beers and associated food pairings. Alternatively, the user can press a "prost!" button that will return recommendations completely at random. 

## MVP Core Features

### Structure
The application will be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API will be handled asynchronously and use JSON as the communication format. Additionally, it will run on a single page. 

### Event-Listeners
The application will utilize three unique event-listeners:

#### Mouse Events: 
The user will be able to interact with the application with "click" and "hover" events. Buttons generate beer cards, which are cards displaying information about the beer. When clicked, they flip over and reveal more information about the beer. When they hover their mouse over the cards, the recommendations will transition from greyed out to color.

#### CSS Transition: 
Recommendations will appear as faded cards until the mouse pointer hovers over the card. Then, the card will fade into view.

#### Form Events: 
The user will be able to search for beers by submitting a form, which will reset after a search is completed. 

### Array Iteration
The application will utilize the ".forEach" array iteration to present the beer recommendations. 

### Stretch Goals
We hope to include additional features in the future, such as making the recommendations more interactive (i.e.: adding additional click functions), the ability to like, review, and save beer recommendations to a wishlist, and the ability recieve information on where to find  recommended beers with the click of a "distillery" button.

## API
For this application, we will be using the Open Library API (https://openlibrary.org/developers/api). We will access the API to search for beers (both at random or by specific user-selected criteria) and present recommendations (with titles, authors, genres, summaries, and beer covers).

## Expected Challenges
Over the course of this project, we will have to work together to figure out how to structure the HTML, create an appealing webpage via the CSS stylesheet, and implement the planned click-events--particularly the fade-in feature, which neither of us have done before.

## On Meeting Requirements
To meet the requirements, we will communicate virtually (through phone, text, and facetime) to divide up research tasks. Then, we will structure and implement the code via pair programming, where one is the driver and the other is the navigator for that session. # phase-1-project
# Beer-Generator
