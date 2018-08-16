import Layout from "../components/Layout";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "../components/BookList";
import AddBook from "../components/AddBook";

//Apollo Client Setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Index = props => (
  <ApolloProvider client={client}>
    <Layout>
      <div id="main">
        <h1>Welcome to GraphQL Next.js Boilerplate</h1>
        <h2>Reading List</h2>
        <BookList />
        <AddBook />
      </div>
    </Layout>
  </ApolloProvider>
);

export default Index;
