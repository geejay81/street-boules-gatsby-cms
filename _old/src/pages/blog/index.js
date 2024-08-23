import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import HeaderHero from "../../components/HeaderHero";
import Seo from "../../components/Seo";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title={"Latest stories"} />
        <HeaderHero title={"Latest Stories"}></HeaderHero>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
