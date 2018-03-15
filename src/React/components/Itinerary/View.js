import React from "react";
import "./itinerary.css";

const Itinerary = ({ outbound_journey, return_journey }) => {
  return (
    <div className="itinerary">
      <div className="journey">
        <h3 className="journey-title">Outbound Journey</h3>
        <div className="station">
          <h5 className="title">Station</h5>
          {outbound_journey.segments[0].legs[0].departure_station}
        </div>
        <div className="mode">
          <div className="title">Transportation Mode</div>
          {outbound_journey.segments[0].legs[0].mode}
        </div>
      </div>
      <div className="arrow"> --> </div>
      <div className="journey">
        <h3 className="journey-title">Return Journey</h3>
        <div className="station">
          <h5 className="title">Station</h5>
          {return_journey.segments[0].legs[0].departure_station}
        </div>
        <div className="mode">
          <div className="title">Transportation Mode</div>
          {return_journey.segments[0].legs[0].mode}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
