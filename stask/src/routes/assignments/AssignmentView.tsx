import { useAuth0 } from "@auth0/auth0-react";
import firebase from "firebase";
import {
  Box,
  Button,
  Header,
  Heading,
  Main,
  Text,
  TextInput,
} from "grommet";
import Datetime from "react-datetime";
import React, { ReactElement, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { Link, useParams } from "react-router-dom";
import service from "../../shared/services/firestore.service";
import MDEditor from "@uiw/react-md-editor";
import UserDataService from "../../shared/services/firestore.service";
import moment, { Moment } from "moment";
import {ReactTinyLink} from 'react-tiny-link'
interface Props {
  documentId: string;
}

export default function AssignmentView({}: Props): ReactElement {
  const { user } = useAuth0();
  let { id } = useParams<{ id: string }>();

  const [editing, setEditing] = useState(false);

  const doc = service.getAssignmentFromUserID(id, user.sub);

  const usedoc = useDocument(doc, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const value = usedoc[0];
  const loading = usedoc[1]!;
  const error = usedoc[2]!;

  if (!value) return <> No assignment found </>;
  if (!value.data()) return <> No assignment found </>;
  const assignment = service.docToAssignment(value);

  const date = moment(assignment.dueDate);
  return (
    <div>
      <Box flex>
        <Header background="brand"  justify="center" align="center" height="10vh">
          <Text>{assignment.course}</Text>
          <Box direction="row" gap="1em">
            <Text> Due: </Text>

            <Text>{date.format("dddd, MMMM Do YYYY, h:mm a")}</Text>
          </Box>

          <Button
            size="small"
            label="Edit"
            onClick={() => setEditing(!editing)}
          />
        </Header>
        <Main height="100%" pad="large" fill>
          {editing ? (
            <Box flex fill height="100%">
              <TextInput
                value={assignment.title}
                onChange={(val) => {
                  UserDataService.updateAssignment(user.sub, assignment._id, {
                    title: val.target.value,
                  });
                }}
              />

              <Box fill>
                <MDEditor
                  value={assignment.description}
                  onChange={(val) => {
                    UserDataService.updateAssignment(user.sub, assignment._id, {
                      description: val,
                    });
                  }}
                />
              </Box>
             
            </Box>
          ) : (
            <Box>
              <Heading>{assignment.title}</Heading>
              <Box fill>
                <MDEditor.Markdown source={assignment.description} />
                
                 <Box elevation="2">
                   { assignment.links.map( link => (
                   
                   <ReactTinyLink   cardSize="small"
                   showGraphic={true}
                   maxLine={2}
                   minLine={1}
                   url={link}> </ReactTinyLink>
                   ))}
                 </Box>
              </Box>
            </Box>
          )}

         
        </Main>
        {
            editing && ( <Box>
              <Text>Change Due Time</Text>
              <Datetime
                initialValue={new Date(assignment.dueDate)}
                inputProps={{ disabled: !editing }}
                onChange={(value) => {
                  UserDataService.updateAssignment(
                    assignment.uid,
                    assignment._id,
                    {
                      dueDate: (value as Moment).toISOString(),
                    }
                  );
                }}
              ></Datetime>
            </Box>)
          }

      </Box>
    </div>
  );
}
