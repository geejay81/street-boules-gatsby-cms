import React from "react";
import Layout from "../../components/Layout";
import HeaderHero from "../../components/HeaderHero";
import Seo from "../../components/Seo";

// eslint-disable-next-line
export default () => (
  <Layout>
    <Seo title={"Thank you!"} />
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
