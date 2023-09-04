import * as React from "react";
import PropTypes from "prop-types";
import CardImage from "./CardImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div className="column is-half-tablet is-one-quarter-desktop">
        <div class="card feature-card">
          <div className="card-image">
            <CardImage imageInfo={item}></CardImage>
          </div>
        <div class="card-content">
          <div class="content">
            {item.text}
          </div>
        </div>
      </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
