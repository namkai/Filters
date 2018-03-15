import PropTypes from "prop-types";
import React from "react";
import Itinerary from "../Itinerary";
import Loading from "../Loading";
import "./ItinerariesList.css";

const ItinerariesList = ({ itineraries }) => (
  <div className="list">
    {itineraries.length > 0 ? (
      itineraries.map(itinerary => (
        <Itinerary {...itinerary} key={itinerary.id} />
      ))
    ) : (
      <Loading />
    )}
  </div>
);

ItinerariesList.defaultProps = {
  itineraries: []
};

ItinerariesList.propTypes = {
  itineraries: PropTypes.arrayOf(PropTypes.object)
};

export default ItinerariesList;
