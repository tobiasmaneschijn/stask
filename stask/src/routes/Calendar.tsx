import { Calendar, Header, Text } from "grommet";
import React from "react";
import {
  EventContentArg,
} from "@fullcalendar/react";
import { AssignmentType } from "../shared/types/types";
import UserDataService from "../shared/services/firestore.service";
import { CalendarBox } from "../shared/components/CalendarBox";

export function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.event.extendedProps.department}</b>

      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function CalendarPage() {
 return <CalendarBox type="dayGridMonth"/>
}





