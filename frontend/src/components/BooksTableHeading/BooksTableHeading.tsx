import React from "react";

const BooksTableHeading: React.FC = () => {

  const tableHeadings = {
    title: "Book title",
    name: "Author Name",
    category: "Category",
    isbn: "ISBN",
    createdAt: "Created At",
    editedAt: "Edited At",
    actions: "Actions",
  };

  return (
    <thead>
      <tr>
        {Object.values(tableHeadings).map((head) => {
          return (
            <td
              key={head}
              className="has-text-centered has-text-weight-bold is-uppercase"
              style={{ verticalAlign: "middle" }}
            >
              {head}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

export default BooksTableHeading;
