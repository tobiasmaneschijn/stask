import { useAuth0 } from "@auth0/auth0-react";
import {
  CardBody,
  Box,
  Button,
  Card,
  CardHeader,
  Header,
  Text,
  CardFooter,
  DataTable,
  DateInput,
  MaskedInput,
} from "grommet";
import React, { useState } from "react";
import { AssignmentType } from "../shared/types/types";
import UserDataService from "../shared/services/firestore.service";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router";
import Datetime from "react-datetime";
import { AnchorLink } from "../shared/components/AnchorLink";

interface UserType {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: Date;
  email: string;
  email_verified: boolean;
  sub: string;
}

/**
 * This is the page where assignments are showed
 * @returns Assignment Page component.
 */
export default function Assignments() {
  const { user, isAuthenticated } = useAuth0();
  const theUser: UserType = user;

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

  const assignments:
    | Array<AssignmentType>
    | undefined = value?.docs.map<AssignmentType>((doc) =>
    UserDataService.dataToAssignment(doc)
  );

  return (
    <Box direction="column" margin="10px">
      <Header>Assignments</Header>

      {loading && <span>Collection: Loading...</span>}

      <DataTable
        primaryKey="id"
        sortable
        data={assignments}
        columns={[
          {
            property: "title",
            header: <Text>Title</Text>,
            render: (datum) => (
              <AnchorLink to={"assignments/" + datum._id} label={datum.title} />
            ),
          },
          {
            property: "course",
            header: <Text>Course</Text>,
          },
          {
            property: "dueDate",
            header: "Due",
            render: (datum) => (
              <div>
                <Datetime
                  initialValue={new Date(datum.dueDate)}
                  onChange={(value) => {
                    UserDataService.updateAssignment(datum.uid, datum._id, {
                      dueDate: value.toString(),
                    });
                  }}
                ></Datetime>
              </div>
            ),
          },
        ]}
      />
    </Box>
  );
}
