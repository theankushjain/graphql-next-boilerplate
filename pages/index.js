import Layout from "../components/Layout";
import BookList from "../components/BookList";

const Index = props => (
  <Layout>
    <div id="main">
      <h1>Welcome to GraphQL Next.js Boilerplate</h1>
      <h2>Reading List</h2>
      <BookList />
    </div>
  </Layout>
);

export default Index;
