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
      <Seo 
        title={post.frontmatter.title} 
        description={"Team Info"}
        ogImage={post.frontmatter.logoImage?.childImageSharp?.fixed?.src} />
      <HeaderHero title={post.frontmatter.title}></HeaderHero>
      <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-3">
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
              </div>
              <div
                className="column is-5"
                style={{ marginBottom: "6rem" }}
              >
                <div className="content">
                  <dl>
                    <dt>Conference</dt>
                    <dd>{post.frontmatter.conference}</dd>
                    <dt>Home Ground</dt>
                    <dd>{post.frontmatter.homeGround}</dd>
                    { 
                      post.frontmatter.rival &&
                        <React.Fragment>
                          <dt>Main Rival</dt>
                          <dd>{post.frontmatter.rival}</dd>    
                        </React.Fragment>
                    }
                    { 
                      post.frontmatter.honours &&
                        <React.Fragment>
                          <dt>Honours</dt>
                          <dd>{post.frontmatter.honours}</dd>    
                        </React.Fragment>
                    }
                    {post.frontmatter.shirtImage && 
                      <React.Fragment>
                        <dt>Kit</dt>
                        <dd style={{width: "10rem"}}>
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
                        </dd>
                      </React.Fragment>
                      }
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
        rival,
        honours,
        logoImage {
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 100
              layout: CONSTRAINED
            ),
            fixed(width: 500) {
              src
            }
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
