export default interface Book {
  title: string
  name: string
  category: string
  isbn: string
  createdAt: string
  editedAt: null | string;
  isActive: boolean;
  _id?: string;
  __v?: number;
}
