import BookType from "../../types/BookType";

type BookForSeedingType = Pick<
  BookType,
  "title" | "name" | "category" | "isbn"
>;

const books: BookForSeedingType[] = [
  {
    title: "1984",
    name: "George Orwell",
    category: "Dystopian",
    isbn: "978-0451524935",
  },
  {
    title: "Brave New World",
    name: "Aldous Huxley",
    category: "Dystopian",
    isbn: "978-0060850524",
  },
  {
    title: "Fahrenheit",
    name: "Ray Bradbury",
    category: "Dystopian",
    isbn: "978-1451673319",
  },
  {
    title: "The Handmaid's Tale",
    name: "Margaret Atwood",
    category: "Dystopian",
    isbn: "978-0385490818",
  },
  {
    title: "To Kill a Mockingbird",
    name: "Harper Lee",
    category: "Classic",
    isbn: "978-0061120084",
  },
  {
    title: "The Great Gatsby",
    name: "F. Scott Fitzgerald",
    category: "Classic",
    isbn: "978-0743273565",
  },
  {
    title: "Pride and Prejudice",
    name: "Jane Austen",
    category: "Classic",
    isbn: "978-1503290563",
  },
  {
    title: "Moby-Dick",
    name: "Herman Melville",
    category: "Classic",
    isbn: "978-1503280786",
  },
  {
    title: "The Hobbit",
    name: "J.R.R. Tolkien",
    category: "Fantasy",
    isbn: "978-0547928227",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    name: "J.K. Rowling",
    category: "Fantasy",
    isbn: "978-0590353427",
  },
  {
    title: "The Lord of the Rings",
    name: "J.R.R. Tolkien",
    category: "Fantasy",
    isbn: "978-0544003415",
  },
  {
    title: "A Game of Thrones",
    name: "George R.R. Martin",
    category: "Fantasy",
    isbn: "978-0553593716",
  },
  {
    title: "The Catcher in the Rye",
    name: "J.D. Salinger",
    category: "Coming-of-Age",
    isbn: "978-0316769488",
  },
  {
    title: "Little Women",
    name: "Louisa May Alcott",
    category: "Coming-of-Age",
    isbn: "978-0147514011",
  },
  {
    title: "Anne of Green Gables",
    name: "L.M. Montgomery",
    category: "Coming-of-Age",
    isbn: "978-0553213133",
  },
  {
    title: "Crime and Punishment",
    name: "Fyodor Dostoevsky",
    category: "Psychological Fiction",
    isbn: "978-0486454115",
  },
  {
    title: "The Picture of Dorian Gray",
    name: "Oscar Wilde",
    category: "Psychological Fiction",
    isbn: "978-0486278070",
  },
  {
    title: "Dracula",
    name: "Bram Stoker",
    category: "Horror",
    isbn: "978-0486411095",
  },
  {
    title: "Frankenstein",
    name: "Mary Shelley",
    category: "Horror",
    isbn: "978-0486282114",
  },
  {
    title: "The Shining",
    name: "Stephen King",
    category: "Horror",
    isbn: "978-0307743657",
  },
];

export default books;
