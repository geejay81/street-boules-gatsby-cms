import * as React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";

const Seo = ({title: pageTitle, description: pageDescription, ogImage}) => {
    const { title } = useSiteMetadata();

    return(
        <Helmet title={`${pageTitle} | ${title}`}>
            { pageDescription && 
              <meta name="description" content={pageDescription} />
            }
            <meta property="og:title" content={pageTitle} />
            { ogImage && 
              <meta
                property="og:image"
                content={ogImage} />
            }
        </Helmet>
    );
}

export default Seo;