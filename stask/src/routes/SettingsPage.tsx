import { Box, Calendar, Header, Select, Text } from "grommet";
import React, { useState } from "react";
import { EventContentArg } from "@fullcalendar/react";
import { AssignmentType } from "../shared/types/types";
import UserDataService from "../shared/services/firestore.service";

export default function SettingsPage() {
  const [language, setLanguage] = useState("English");

  return (
    <Box pad="5em" gap="small" fill direction="row" flex>
      <Box flex direction="column" gap="small" height="2vh">
        <Text>Language</Text>
        <Select
          options={["English", "Danish"]}
          value={language}
          onChange={({ option }) => setLanguage(option)}
        />
      </Box>
    </Box>
  );
}
