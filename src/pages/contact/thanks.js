import React from "react";
import Layout from "../../components/Layout";
import HeaderHero from "../../components/HeaderHero";

// eslint-disable-next-line
export default () => (
  <Layout>
    <HeaderHero title={"Thank you!"}></HeaderHero>
    <section className="section">
      <div className="container">
        <div className="content">
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
);
