import Book from "../models/Book";
import BookType from "../types/BookType";
import books from "./data/books";

const seedBookToDB = async () => {
  try {
    await Book.deleteMany();

    Promise.all(
      books.map(async (book) => {
        const newBook: BookType = {
          ...book,
          isActive: true,
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        await Book.create(newBook);
      })
    );

    console.log("Seeding books was successful!");
  } catch (err) {
    console.error(err);
  }
};

export const resetBooksInDB = async () => {
  try {
    await seedBookToDB();

    const booksReset = setInterval(async () => {
      try {
        await seedBookToDB();
      } catch (error) {
        console.error("Scheduled seed failed:", error);
      }
    }, 1000 * 60 * 60 * 24);

    // setTimeout(() => {
    //   clearInterval(booksReset);
    //   console.log("Stopped book seeding interval");
    // }, 10000);
  } catch (error) {
    console.error("Initial book seeding failed:", error);
  }
};
