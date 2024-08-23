import * as React from "react";
import { Link } from 'gatsby'
import CardImage from './CardImage'

const BlogCard = ({ node: post }) => {

    return (
        <div className="column is-half-tablet is-one-third-desktop is-one-quarter-fullhd key={post.id}">
            <article className="card">
                <div className="card-image">
                    <CardImage
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
    )
}

export default BlogCard;