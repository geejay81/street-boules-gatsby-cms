import * as React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { useLocation } from '@reach/router';

const Seo = ({title: pageTitle, description: pageDescription, ogImage}) => {
    const { title } = useSiteMetadata();
    const location = useLocation();

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
            <meta property="og:url" content={location.pathname} />
        </Helmet>
    );
}

export default Seo;