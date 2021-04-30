import { Box, Header } from "grommet";
import React from "react";
import FullCalendar, { EventClickArg, PluginDef } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import { renderEventContent } from "../../routes/Calendar";
import "./CalendarBox.css"
interface Props {
  type: "dayGridMonth" | "listWeek";
  width?: string;
  height?: string;
  fill?: boolean;
}

export const CalendarBox = (props: Props) => {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const [value, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("users/")
      .doc(user.sub)
      .collection("assignments"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (!value) {
    return (
      <Box fill flex justify="center" alignContent="center" align="center">
        {" "}
        <Header> You have an empty calendar!</Header>{" "}
      </Box>
    );
  }

  let plugins: Array<PluginDef> = [];
  switch (props.type) {
    case "dayGridMonth":
      plugins.push(dayGridPlugin);
      break;
    case "listWeek":
      plugins.push(listPlugin);
  }
  plugins.push(interactionPlugin);

  const eventClick = (e: EventClickArg) => {
    history.push("assignments/" + e.event.extendedProps.id);
  };

  const events = value.docs.map((doc) => {
    const data = doc.data();

    return {
      title: data.title,
      start: Date.parse(data.dueDate),
      extendedProps: {
        id: doc.id,
        course: data.course,
      },
      description: data.description,
    };
  });

  return (
    <Box
      direction="column"
      fill={props.fill}
      height={props.height}
      width={props.width}
      pad="2em"
      margin="0"
      elevation="medium"
      round="xsmall"
    >
      <FullCalendar 
        height="100%"
        editable
        plugins={plugins}
        initialView={props.type}
        eventContent={renderEventContent}
        events={events}
        eventClick={eventClick}
      />
    </Box>
  );
};
