import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (

            <div className="column is-parent is-4 key={post.id}">
              <article className="card blog-list-item tile is-child">
                <div className="card-image">
                <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          width:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3 className='title'><Link
                          className="has-text-primary is-size-4"
                          to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link></h3>
                    <div className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </div>
                    <p>
                      {post.excerpt}
                    </p>
                    <Link className="button is-danger is-outline" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            // <div className="is-parent column is-6" key={post.id}>
            //   <article
            //     className={`blog-list-item tile is-child box notification ${
            //       post.frontmatter.featuredpost ? 'is-warning' : ''
            //     }`}
            //   >
            //     <header>
            //       {post.frontmatter.featuredimage ? (
            //         <div className="featured-thumbnail">
            //           <PreviewCompatibleImage
            //             imageInfo={{
            //               image: post.frontmatter.featuredimage,
            //               alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            //               width:
            //                 post.frontmatter.featuredimage.childImageSharp
            //                   .gatsbyImageData.width,
            //               height:
            //                 post.frontmatter.featuredimage.childImageSharp
            //                   .gatsbyImageData.height,
            //             }}
            //           />
            //         </div>
            //       ) : null}
            //       <p className="post-meta">
            //         <h3 className='title'><Link
            //           className="has-text-primary is-size-4"
            //           to={post.fields.slug}
            //         >
            //           {post.frontmatter.title}
            //         </Link></h3>
            //         <div className="subtitle is-size-5 is-block">
            //           {post.frontmatter.date}
            //         </div>
            //       </p>
            //     </header>
            //     <p>
            //       {post.excerpt}
            //     </p>
            //     <Link className="button is-danger is-outline" to={post.fields.slug}>
            //       Keep Reading →
            //     </Link>
            //   </article>
            // </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
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
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
