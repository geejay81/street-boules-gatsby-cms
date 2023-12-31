import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import HeaderHero from "../components/HeaderHero";
import Seo from "../components/Seo";
import PreviewCompatibleImage from "../components/CardImage";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage,
  featuredimagealttext,
  featuredimagetitle
}) => {
  const PostContent = contentComponent || Content;
  console.log(featuredimage);

  return (
    <React.Fragment>
      <HeaderHero title={title} subheading={description}></HeaderHero>
      <section className="section">
        <div className="container content">
          <div className="columns is-flex-direction-row-reverse">
          <div className="column is-4 is-offset-1">
            {featuredimage &&
              <PreviewCompatibleImage
                imageInfo={{
                    image: featuredimage,
                    alt: featuredimagealttext,
                    width: featuredimage.childImageSharp
                        .gatsbyImageData.width,
                    height: featuredimage.childImageSharp
                        .gatsbyImageData.height,
                }}
              />
            }
            </div>
            <div className="column is-7">
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h2>Tags</h2>
                  <ul className="tags">
                    {tags.map((tag) => (
                      <li key={tag + `tag`} className="tag is-info is-large">
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  featuredimagealttext: PropTypes.string,
  featuredimagetitle: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Seo 
        title={post.frontmatter.title} 
        description={post.frontmatter.description}
        ogImage={post.frontmatter.featuredimage?.childImageSharp?.fixed?.src} />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        featuredimagealttext={post.frontmatter.featuredimagealttext}
        featuredimagetitle={post.frontmatter.featuredimagetitle}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimagealttext
        featuredimagetitle
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              quality: 100
              layout: CONSTRAINED
            )

          }
        }
      }
    }
  }
`;
