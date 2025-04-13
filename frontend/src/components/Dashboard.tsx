import React from "react";
import { useGlobalState } from "../context/CustomHooks";
import { Loader } from "./Loader";

const Dashboard: React.FC = () => {
  const { booksList, isLoading } = useGlobalState();
  
  const tableHeadings = {
    title: "Book title",
    name: "Author Name",
    category: "Category",
    isbn: "ISBN",
    createdAt: "Created At",
    editedAt: "Edited At",
    actions: "Actions",
  };

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div
      className="table-container is-size-6 is-size-7-mobile"
      id="table-container"
    >
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
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

        <tbody>
          {booksList.map((book) => {
            const { title, name, category, isbn, isActive, createdAt, editedAt } = book;

            return (
              <tr key={title} className="has-text-centered">
                <td style={{ verticalAlign: "middle" }}>{title}</td>
                <td style={{ verticalAlign: "middle" }}>{name}</td>
                <td style={{ verticalAlign: "middle" }}>{category}</td>
                <td style={{ verticalAlign: "middle" }}>{isbn}</td>
                <td className="date-column" style={{ verticalAlign: "middle" }}>
                  {createdAt}
                </td>
                <td className="date-column" style={{ verticalAlign: "middle" }}>
                  {editedAt}
                </td>
                <td
                  className="actions-cell"
                  style={{ verticalAlign: "middle" }}
                >
                  {isActive && (
                    <button
                      className="button is-small is-danger is-uppercase"
                    >
                      Deactivate
                    </button>
                  )}
                  {!isActive && (
                    <button
                      className="button is-small is-success is-uppercase"
                    >
                      Re-Activate
                    </button>
                  )}
                  {isActive && (
                    <button
                      className="button is-small is-warning button-edit"
                    />
                  )}
                  {!isActive && (
                    <button
                      className="button is-small is-danger button-delete"
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
