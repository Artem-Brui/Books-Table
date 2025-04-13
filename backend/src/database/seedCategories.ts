import Category from "../models/Category";
import categories from "./data/categories";

export const seedCategories = async () => {
  try {
    await Category.deleteMany();

    Promise.all(
      categories.map(async (category) => await Category.create(category))
    );

    console.log("Seeding categories was successful!");
  } catch (err) {
    console.error(err);
  }
};
