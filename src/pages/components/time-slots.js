import React, { useState, useEffect } from "react";
import { Time } from "../../functions/helper";
import "../../styles/components/time-slots.scss";

export const TimeSlots = ({ setLocation, locations }) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    let temp = [...new Set(locations.map((location) => location.open))];
    temp.sort((a, b) => a - b);
    setTimeSlots(temp);
  }, [locations]);

  return (
    <div className="time-slots">
      {timeSlots.map((timeSlot) => (
        <div className="time-slot" key={timeSlot}>
          {Time.hour(timeSlot)}
          {locations
            .filter((loc) => loc.open === timeSlot)
            .map((l) => (
              <div
                className="location"
                key={l.name}
                onClick={() => {
                  setLocation(l);
                }}
              >
                {l.name}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
