const { ApolloServer, gql } = require("apollo-server-express");
const Book = require("./../models/book");
const Author = require("./../models/author");

// var books = [
//   { name: "Name of the Wind", genre: "Fantasy", id: "1", authorId: "1" },
//   { name: "The Final Empire", genre: "Fantasy", id: "2", authorId: "2" },
//   { name: "The Hero of Ages", genre: "Fantasy", id: "4", authorId: "2" },
//   { name: "The Long Earth", genre: "Sci-Fi", id: "3", authorId: "3" },
//   { name: "The Colour of Magic", genre: "Fantasy", id: "5", authorId: "3" },
//   { name: "The Light Fantastic", genre: "Fantasy", id: "6", authorId: "3" }
// ];

// var authors = [
//   { name: "Patrick Rothfuss", age: 44, id: "1" },
//   { name: "Brandon Sanderson", age: 42, id: "2" },
//   { name: "Terry Pratchett", age: 66, id: "3" }
// ];

var typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book]
  }

  type Query {
    book(id: ID): Book
    author(id: ID): Author
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author
    addBook(name: String!, genre: String!, authorId: ID!): Book
  }
`;

var resolvers = {
  Query: {
    book: (root, { id }) => {
      //   return _.find(books, { id });
      return Book.findById(id);
    },

    author: (root, { id }) => {
      //   return _.find(authors, { id });
      return Author.findById(id);
    },

    books: root => {
      return Book.find();
    },

    authors: root => {
      return Author.find();
    }
  },
  Mutation: {
    addAuthor: (root, { name, age }) => {
      let author = new Author({
        name: name,
        age: age
      });
      return author.save();
    },
    addBook: (root, { name, genre, authorId }) => {
      let book = new Book({
        name: name,
        genre: genre,
        authorId: authorId
      });
      return book.save();
    }
  },
  Author: {
    // books: author => _.filter(books, { authorId: author.id })
    books: author => Book.find({ authorId: author.id })
  },
  Book: {
    // author: book => _.find(authors, { id: book.authorId })
    author: book => Author.findById(book.authorId)
  }
};

module.exports = new ApolloServer({ typeDefs, resolvers });
