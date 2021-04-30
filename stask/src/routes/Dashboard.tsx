import { Box, BoxExtendedProps, Clock, ClockExtendedProps } from "grommet";
import React, { CSSProperties } from "react";
import { CalendarBox } from "../shared/components/CalendarBox";
import { NewsBox } from "../shared/components/NewsBox";

export default function Dashboard() {
  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    margin: 0,
  };

  const centerBox: BoxExtendedProps = {
    flex: true,
    justify: "center",
    align: "center",
  };

  const shadowStyle: BoxExtendedProps = {
    margin: "0",
    fill: true,
    elevation: "medium",
    round: "xsmall",
  };

  const clockShadowStyle: ClockExtendedProps = {
    margin: "0",
    elevation: "medium",
  };

  return (
    <Box style={containerStyle}>
      <Box {...centerBox} margin="1em">
        <Clock type="digital" elevation="medium" {...clockShadowStyle} />
      </Box>
      <Box className="item" margin="1em">
        <Box {...shadowStyle}>
          <NewsBox height="100%" width="100%" />
        </Box>
      </Box>
      <Box className="item" margin="1em">
        <Box {...shadowStyle}>
          <CalendarBox height="100%" type="listWeek" />
        </Box>
      </Box>
      <Box className="item" margin="1em">
        <Box {...shadowStyle}></Box>
      </Box>
    </Box>
  );
}
