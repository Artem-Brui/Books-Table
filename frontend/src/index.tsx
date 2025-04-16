import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";
import Dashboard from "./components/BooksTable/BooksTable.tsx";
import BookForm from "./components/BookForm/BookForm.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<BookForm />} />
        <Route path="edit" element={<BookForm/>} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  </Router>
);
