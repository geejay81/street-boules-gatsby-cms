import React from "react";
import PropTypes from "prop-types";

export default function HeaderHero(props) {

    return (
        <section class="hero is-info">
            <div class="hero-body">
            { props.title && props.title.length > 0 &&
                <h1 class="title">
                    { props.title }
                </h1>
            } 
            { props.subheading && props.subheading.length > 0 &&
                <p class="subtitle">
                    { props.subheading }
                </p>
            }
            </div>
        </section>
    )
}

HeaderHero.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string
};