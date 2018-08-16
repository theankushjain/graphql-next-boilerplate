import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import fetch from "isomorphic-unfetch";

import { getBooksQuery } from "../Queries/queries";
import BookDetails from "./BookDetails";

if (!process.browser) {
  global.fetch = fetch;
}

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayBooks() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>loading books...</div>;
    } else {
      return this.props.data.books.map(book => {
        return (
          <li
            key={book.id}
            onClick={e => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div id="main">
        <div id="item1">
          <ul id="book-list">{this.displayBooks()}</ul>
        </div>
        <div id="item2">
          <BookDetails bookId={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
