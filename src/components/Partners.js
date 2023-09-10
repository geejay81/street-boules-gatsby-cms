import * as React from "react";
import popidle from "../img/sponsor-logos/popIdle-logo-transparent.png";
import tuffGym from "../img/sponsor-logos/tuff-gym-logo-transparent.png";

const Partners = class extends React.Component {
    render() {
      return (
        <section className="section has-background-warning">
            <div className="container">
                <h2 className="title">Official Partners</h2>
                <div class="columns">
                    <div class="column is-3">
                        <div class="notification is-link is-flex is-align-items-center is-justify-content-center" style={{height: "100%"}}>
                            <a href="https://popidle.the-sound.co.uk">
                                <img
                                    src={popidle}
                                    alt="PopIdle"
                                    style={{maxWidth: "100%", maxHeight: "100%", height: "auto"}}
                                />
                            </a>
                        </div>
                    </div>
                    <div class="column is-3">
                        <div class="notification is-dark is-flex is-align-items-center is-justify-content-center" style={{height: "100%"}}>
                            <img
                                src={tuffGym}
                                alt="Tuff Gym"
                                style={{maxWidth: "100%", maxHeight: "100%", height: "auto"}}
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