import * as React from "react";
import Layout from "../components/Layout";
import HeaderHero from "../components/HeaderHero"

const NotFoundPage = () => (
  <Layout>
    <HeaderHero title={"It's a miss!"}></HeaderHero>
    <main className="section">
      <div className="container">
        <h2 className="title">Page not found</h2>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </main>
  </Layout>
);

export default NotFoundPage;
