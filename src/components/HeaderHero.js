import React from "react";
import PropTypes from "prop-types";

export default function HeaderHero(props) {

    return (
        <section className="hero is-danger is-bold">
            <div className="hero-body">
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
            {/* { props.title && props.title.length > 0 &&
                <h1 className="title hero-title">
                    <span className="hero-text">{ props.title }</span>
                </h1>
            } 
            { props.subheading && props.subheading.length > 0 &&
                <p className="subtitle hero-subtitle">
                    <span className="hero-text">{ props.subheading }</span> 
                </p>
            } */}
            </div>
        </section>
    )
}

HeaderHero.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string
};