import * as React from "react";
import popidle from "../img/sponsor-logos/popIdle-logo-transparent.png";
import tuffGym from "../img/sponsor-logos/tuff-gym-logo-transparent.png";
import attackTheJack from "../img/sponsor-logos/attack-the-jack-transparent.png";

const Partners = class extends React.Component {
    render() {
      return (
        <section className="section has-background-warning is-bold">
            <div className="container">
                <h2 className="title">Official Partners</h2>
                <div class="columns is-multiline">
                    <div class="column is-3">
                        <div class="box has-background-dark is-flex is-align-items-center is-justify-content-center partner-panel">
                            <img
                                src={tuffGym}
                                alt="Tuff Gym"
                                className="partner-panel__img"
                            />
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="box has-background-primary is-flex is-align-items-center is-justify-content-center partner-panel">
                            <a href="https://popidle.the-sound.co.uk">
                                <img
                                    src={popidle}
                                    alt="PopIdle"
                                    className="partner-panel__img"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="box has-background-black is-flex is-align-items-center is-justify-content-center partner-panel">
                            <img
                                src={attackTheJack}
                                alt="Attack The Jack Apparel"
                                className="partner-panel__img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }
}

export default Partners;