import { Avatar, Box, Calendar, Header, Select, Stack, Text } from "grommet";
import React, { useState } from "react";
import { EventContentArg } from "@fullcalendar/react";
import { AssignmentType } from "../shared/types/types";
import UserDataService from "../shared/services/firestore.service";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "@auth0/auth0-react/dist/auth-state";
import { useDocument } from "react-firebase-hooks/firestore";
import firestore from "../shared/services/firebase";
import { Checkmark } from "grommet-icons";

export default function ProfilePage() {
  const { user } = useAuth0();

  const doc = firestore.collection("users").doc(user.sub);

  const userdoc = useDocument(doc, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const value = userdoc[0];
  const loading = userdoc[1]!;
  const error = userdoc[2]!;

  return (
    <Box alignContent="center" justify="center" pad="5em" flex>
      <Box align="center" gap="small" >
        <Stack anchor="top-right">
          <Avatar size="xlarge" src={user.picture} />
        </Stack>
        <Text>{user.name}</Text>
      </Box>
      <Text>Nickname: {user.nickname}</Text>
      <Text>Email: {user.email}</Text>
      <Text>
        {user.email_verified ? (
          <Text>
            {" "}
            Verified <Checkmark />{" "}
          </Text>
        ) : (
          <Text> </Text>
        )}
      </Text>
    </Box>
  );
}
const userTemplate: User = {
  given_name: "Tobias",
  family_name: "Nyholm Maneschijn",
  nickname: "tfrom222",
  name: "Tobias Nyholm Maneschijn",
  picture:
    "https://lh3.googleusercontent.com/a-/AOh14GgPaUGX41CrB9-wSXtsK8qPHel8RXXxl7nJX-sQuA=s96-c",
  locale: "da",
  updated_at: "2021-04-29T13:32:32.660Z",
  email: "tfrom222@gmail.com",
  email_verified: true,
  sub: "google-oauth2|112729045075795801413",
};
