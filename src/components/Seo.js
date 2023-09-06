import * as React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";

const Seo = ({title: pageTitle}) => {
    const { title, description } = useSiteMetadata();

    return(
        <Helmet title={`${pageTitle} | ${title}`}></Helmet>
    );
}

export default Seo;