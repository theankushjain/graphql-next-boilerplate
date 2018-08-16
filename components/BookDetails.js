import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import fetch from "isomorphic-unfetch";

import { getBookQuery } from "../Queries/queries";
import BookList from "./BookList";

if (!process.browser) {
  global.fetch = fetch;
}

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No book selected...</p>;
    }
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
