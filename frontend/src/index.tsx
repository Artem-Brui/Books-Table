import { createRoot } from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";
import Dashboard from "./components/BooksTable/BooksTable.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add" element={<h1>add</h1>} />
        <Route path="edit" element={<h1>edit</h1>} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  </HashRouter>
);
