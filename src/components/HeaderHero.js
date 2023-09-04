import React from "react";
import PropTypes from "prop-types";

export default function HeaderHero(props) {

    return (
        <section className="hero is-danger is-bold">
            <div className="hero-body">
                <div className="container">
                    { props.title && props.title.length > 0 &&
                        <h1 className="title">
                            { props.title }
                        </h1>
                    } 
                    { props.subheading && props.subheading.length > 0 &&
                        <p className="subtitle">
                            { props.subheading }
                        </p>
                    }
                </div>
            </div>
        </section>
    )
}

HeaderHero.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string
};