const Bookfactory = (title, author, pages, isRead) => {
  return {
    title,
    author,
    pages,
    isRead,
  };
};

const LibraryModule = (() => {
  let libraryArray = [];
  const addBook = (book) => {
    return libraryArray.push(book);
  };

  const removeBook = (index) => {
    return libraryArray.splice(index, 1);
  };

  const toggleRead = (index) => {
    if (libraryArray[index]) {
      libraryArray[index].isRead = !libraryArray[index].isRead;
    }
    return libraryArray;
  };
  const getBooks = () => {
    return libraryArray;
  };
  const findBook = (title) => {
    const book = libraryArray.find((ele) => ele.title === title);
    return book || "Book not found";
  };

const allbooksbyAuthor = (author) => {
for(let i=0;i<libraryArray.length;i++){
  return  libraryArray[i].author===author ? libraryArray[i]: console.log(`No booksfound by this author`)
}
};
  return {
    addBook,
    removeBook,
    toggleRead,
    getBooks,
    findBook,
    allbooksbyAuthor,
  };
})();

const book1 = Bookfactory("1984", "George Orwell", 328, false);
const book2 = Bookfactory("Animal Farm", "George Orwell", 112, true);
const book3 = Bookfactory("The Alchemist", "Paulo Coelho", 208, true);
const book4 = Bookfactory("Brida", "Paulo Coelho", 300, false);
const book5 = Bookfactory("Veronika Decides to Die", "Paulo Coelho", 272, true);
const book6 = Bookfactory(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  false
);
//console.log(book1, book2);

LibraryModule.addBook(book1);
LibraryModule.addBook(book2);
LibraryModule.addBook(book3);
LibraryModule.addBook(book4);
LibraryModule.addBook(book5);
LibraryModule.addBook(book6);

console.table(LibraryModule.getBooks());
// LibraryModule.toggleRead(0);
// console.table(LibraryModule.getBooks());
// LibraryModule.removeBook(1);
// console.log(LibraryModule.findBook("1984"));
// console.log(LibraryModule.findBook("Harry Potter"));

//console.log(LibraryModule.allbooksbyAuthor("George Orwell"))
// should return book1 and book2

//console.log(allbooksbyAuthor("Paulo Coelho"));
// should return book3, book4, book5
