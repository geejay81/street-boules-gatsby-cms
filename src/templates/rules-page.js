import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeaderHero from "../components/HeaderHero";

// eslint-disable-next-line
export const RulesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <HeaderHero title={title} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RulesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RulesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RulesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        >
      </RulesPageTemplate>
    </Layout>
  );
};

RulesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RulesPage;

export const rulesPageQuery = graphql`
  query RulesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
