import * as React from "react";
import popidle from "../img/sponsor-logos/popIdle-logo-transparent.png";
import tuffGym from "../img/sponsor-logos/tuff-gym-logo-transparent.png";
import attackTheJack from "../img/sponsor-logos/attack-the-jack-transparent.png";

const Partners = class extends React.Component {
    render() {

        const tuffGymImage = { src: tuffGym,  alt: "Tuff Gym", hasBackground: "dark" };
        const popidleImage = { src: popidle,  alt: "PopIdle", hasBackground: "primary" };
        const attackTheJackImage = { src: attackTheJack,  alt: "Attack The Jack Apparel", hasBackground: "black" };
        const images = [tuffGymImage, popidleImage, attackTheJackImage];
    
        return (
            <section className="section has-background-warning">
                <div className="container">
                    <h2 className="title">Official Partners</h2>
                    <div class="columns is-multiline is-mobile">
                        {images.map((img) => {
                            return (
                                <div className="column is-half-mobile is-half-tablet is-3-desktop">
                                    <div className={`box partners__image has-background-dark`}>
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners;