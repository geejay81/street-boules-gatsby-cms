import * as React from "react";

import Layout from "../../components/Layout";
import Teams from "../../components/Teams";
import HeaderHero from "../../components/HeaderHero";

export default class TeamsIndexPage extends React.Component {
    render() {
      return (
        <Layout>
          <HeaderHero title={"Teams"}></HeaderHero>
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