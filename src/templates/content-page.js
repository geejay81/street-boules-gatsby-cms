import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeaderHero from "../components/HeaderHero";
import Seo from "../components/Seo";

// eslint-disable-next-line
export const ContentPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <Seo title={title} />
      <HeaderHero title={title} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>  
  );
};

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContentPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo 
        title={post.frontmatter.title} 
        description={post.frontmatter.description} 
        ogImage={post.frontmatter.featuredimage?.childImageSharp?.fixed?.src} />
      <ContentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ContentPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContentPage;

export const contentPageQuery = graphql`
  query ContentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        description,
        featuredimage {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
