import React from "react";
import PropTypes from "prop-types";
import 'animate.css';

export default function HeaderHero(props) {

    return (
        <section className="hero is-danger is-bold">
            <div className="hero-body">
                <div className="container">
                    { props.title && props.title.length > 0 &&
                        <h1 className="title animate__animated animate__bounceInLeft">
                            { props.title }
                        </h1>
                    } 
                    { props.subheading && props.subheading.length > 0 &&
                        <p className="subtitle animate__animated animate__bounceInLeft">
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