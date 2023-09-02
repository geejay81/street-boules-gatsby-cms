import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import logo from "../img/logo.png";

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
  const heroImage = getImage(image) || image;

  const splashLogo = getImage("../img/logo.png");

  return (
    <div>
      <section class="hero is-danger is-small is-bold">
        <div class="hero-body has-text-centered">
          <img src={logo} alt="Street Boules"
            style={{ maxHeight: "20rem" }}></img>
        </div>
      </section>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <section className="section section--gradient">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title is-size-1">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.description}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h2 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h2>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="column is-12">
                    <h2 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h2>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn is-danger" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
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
