import { model, Schema } from "mongoose";

const categorieSchema = new Schema({
  name: {
    type: String,
    require: true,
  }
});

const Category = model("Category", categorieSchema, 'Categories');

export default Category;
