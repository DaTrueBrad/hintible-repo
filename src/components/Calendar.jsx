import React, { useRef, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendar = ({journey}) => {
  let calRef = useRef();

  if (!journey.embedUrl) return <h2>Loading...</h2>
  return (
    <InlineWidget
      ref={calRef}
      url={journey.embedUrl}
      styles={{
        height: "55vh",
      }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        hideGdprBanner: true,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      }}
    />
  );
};

export default Calendar;
