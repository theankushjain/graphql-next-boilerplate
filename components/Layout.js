import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>My Next GraphQl App</title>
    </Head>
    <Navbar />
    <div>{props.children}</div>
  </div>
);

export default Layout;
