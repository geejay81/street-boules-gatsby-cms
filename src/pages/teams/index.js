import * as React from "react";
import Layout from "../../components/Layout";
import Teams from "../../components/Teams";
import HeaderHero from "../../components/HeaderHero";
import Seo from "../../components/Seo";

export default class TeamsIndexPage extends React.Component {
    render() {

      const title = "Teams",
            description = "What's your favourite Street Boules team?";

      return (
        <Layout>
          <Seo title={title} description={description} />
          <HeaderHero title={title} subheading={description}></HeaderHero>
          <section className="section">
            <div className="container">
              <div className="content">
                <Teams />
              </div>
            </div>
          </section>
        </Layout>
      );
    }
  }