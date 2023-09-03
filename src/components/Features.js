import * as React from "react";
import PropTypes from "prop-types";
import CardImage from "./CardImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((item) => (
      <div className="column">
        <div class="card">
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
