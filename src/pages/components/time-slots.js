import React, { useState, useEffect } from "react";
import { Time } from "../../functions/helper";
import "../../styles/components/time-slots.scss";

export const TimeSlots = ({ setLocation, locations }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    let temp = [...new Set(locations.map((location) => location.hour))];
    temp.sort((a, b) => a - b);
    setTimeSlots(temp);
  }, [locations]);

  return (
    <div className="time-slots">
      {timeSlots.map((timeSlot) => (
        <div className="time-slot" key={timeSlot}>
          <div className="hour">{Time.hour(timeSlot)}</div>
          <div className="locations">
            {locations
              .filter((loc) => loc.hour === timeSlot)
              .map((l) => (
                <div
                  className="location"
                  key={l.name}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/baudelaire/image/upload/w_500/v1599246387/tour-app-beta/${l.id}/1.jpg)`
                  }}
                  onClick={() => {
                    setLocation(l);
                  }}
                >
                  <div className="location-name">{l.name}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
