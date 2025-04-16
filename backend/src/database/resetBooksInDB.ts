import Book from "../models/Book";
import BookType from "../types/BookType";
import books from "./data/books";

export const seedBookToDB = async () => {
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

let isIntervalSet = false;

export const resetBooksInDB = async (date?: Date) => {
  if (isIntervalSet) {
    return;
  }

  isIntervalSet = true;

  const currentTime = new Date();
  const nextMidnight = new Date(
    Date.UTC(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate() + 1,
      0,
      0,
      0
    )
  );

  const timeUntilMidnight = nextMidnight.getTime() - currentTime.getTime();

  setTimeout(async () => {
    try {
      await seedBookToDB();
      console.log("Books reset successfully at UTC midnight.");
    } catch (error) {
      console.error("Error during midnight reset:", error);
    }

    setInterval(async () => {
      try {
        await seedBookToDB();
        console.log("Books reset successfully as part of daily interval.");
      } catch (error) {
        console.error("Scheduled seed failed:", error);
      }
    }, 1000 * 60 * 60 * 24);
  }, timeUntilMidnight);
};
