/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
let library = [
    {title: "Blood Meridian", author: "Arthur McCarthy", yearPublished: 1986},
    {title: "The Name of the Wind", author: "Patrick Rothfuss", yearPublished: 2007}
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title); 
library[1].yearPublished = 2008; 
console.log(library[1]); 

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library.genres[0] = ["western", "historical fiction"];
library[0]['isAvailable'] = true;

console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
    this.title = 'Siddhartha';
    this.author = 'Hermann Hesse';
    this.yearPublished = 1922;
    this.genres = 'Phylosophical fiction';
}

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
    return {
        title: 'Lord of Light',
        author: 'Roger Zelazny',
        yearPublished: 1967,
        genres: 'Sicene fiction'
    }
}

let newBook = createBook('Hyperion', 'Dan Simmons', 1989, 'Science Fiction');
console.log(newBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

let libraryToJsonString = JSON.stringify(library);
console.log(libraryToJsonString);
let parsedLibrary = JSON.parse(libraryToJsonString);
console.log(parsedLibrary[0].title);