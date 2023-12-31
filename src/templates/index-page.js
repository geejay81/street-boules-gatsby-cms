import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import 'animate.css';

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import logo from "../img/logo.png";
import TeamsList from "../components/Teams";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
 
  return (
    <div>
      <section class="hero is-primary is-small is-bold">
        <div class="hero-body">
          <div className="container">
            <div className="columns is-flex-direction-row-reverse is-vcentered">
              <div className="column has-text-centered is-5">
                <img src={logo} alt="Street Boules" className="animate__animated animate__rubberBand"
                  style={{ maxHeight: "20rem" }}></img>
              </div>
              <div className="column is-7">
                <h1 className="title is-size-1 animate__animated animate__bounceInDown">{mainpitch.title}</h1>
                <p className="subtitle animate__animated animate__bounceInDown">{mainpitch.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h2>
                  <p>{description}</p>
                  <Features gridItems={intro.blurbs} />
                  <h2 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h2>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn is-danger" to="/blog">
                      Read more
                    </Link>
                  </div>
                  <h2 className="has-text-weight-semibold is-size-2">
                    Teams
                  </h2>
                  <TeamsList />
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 560, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
