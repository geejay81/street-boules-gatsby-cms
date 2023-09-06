import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderHero from "../components/HeaderHero";
import Seo from "../components/Seo";
import CardImage from "../components/CardImage";

const Team = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <HeaderHero title={post.frontmatter.title}></HeaderHero>
      <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-4">
                <CardImage
                    imageInfo={{
                    image: post.frontmatter.logoImage,
                    alt: `logo image thumbnail for team ${post.frontmatter.title}`,
                    width:
                        post.frontmatter.logoImage.childImageSharp
                        .gatsbyImageData.width,
                    height:
                        post.frontmatter.logoImage.childImageSharp
                        .gatsbyImageData.height,
                    }}
                />

                {post.frontmatter.shirtImage && 

                  <CardImage
                    imageInfo={{
                    image: post.frontmatter.shirtImage,
                    alt: `shirt image thumbnail for team ${post.frontmatter.title}`,
                    width:
                        post.frontmatter.shirtImage.childImageSharp
                        .gatsbyImageData.width,
                    height:
                        post.frontmatter.shirtImage.childImageSharp
                        .gatsbyImageData.height,
                    }}
                  />
                }
              </div>
              <div
                className="column is-8"
                style={{ marginBottom: "6rem" }}
              >
                <div className="content">
                  <dl>
                    <dt>Conference</dt>
                    <dd>{post.frontmatter.conference}</dd>
                    <dt>Home Ground</dt>
                    <dd>{post.frontmatter.homeGround}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

Team.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Team;

export const teamQuery = graphql`
  query Team($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title,
        conference,
        homeGround,
        logoImage {
          childImageSharp {
            gatsbyImageData(
              width: 560
              quality: 100
              layout: CONSTRAINED
            )

          }
        }
        shirtImage {
          childImageSharp {
            gatsbyImageData(
              width: 560
              quality: 100
              layout: CONSTRAINED
            )

          }
        }
      }
    }
  }
`;
