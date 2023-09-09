import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import CardImage from './CardImage'

class TeamsListTemplate extends React.Component {
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark
  
      return (
        <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (

              <div className="column is-half-tablet is-one-quarter-desktop" key={post.id}>
                <article className="card">
                    <div className="card-image">
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
                    <div className="card-content">
                    <div className="content">
                        <h3 className='title'><Link
                            className="has-text-primary is-size-4"
                            to={post.fields.slug}>
                            {post.frontmatter.title}
                            </Link></h3>
                    </div>
                    </div>
                </article>
              </div>
            ))}
        </div>
      )
    }
}

TeamsList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
        }),
    }),
}

export default function TeamsList() {
    return (
      <StaticQuery
        query={graphql`
          query TeamsListQuery {
            allMarkdownRemark(
              sort: { fields: [frontmatter___title] }
              filter: { frontmatter: { templateKey: { eq: "team" } } }
            ) {
              edges {
                node {
                    id
                    fields {
                     slug
                    }
                    frontmatter {
                     title
                     logoImage {
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
        render={(data, count) => <TeamsListTemplate data={data} count={count} />}
      />
    );
  }