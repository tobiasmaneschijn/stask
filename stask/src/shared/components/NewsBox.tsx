import React from "react";
import firebase from "firebase";

import { Box, Header, Markdown } from "grommet";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import { renderEventContent } from "../../routes/Calendar";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface Props {
  width?: string;
  height?: string;
  fill?: boolean;
}

export const NewsBox = (props: Props) => {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  /*const [value, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("users/")
      .doc(user.sub)
      .collection("assignments"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );*/

    
  const content = `
## News
This app is under **development** 
This box will show news about your **assignments** and the **app**.
  `

  
  return (
    <Box
      direction="column"
      fill={props.fill}
      height={props.height}
      width={props.width}
      title="News"
      margin="0"
      elevation="medium"
      round="xsmall"
      pad="2em"
    >
        <ReactMarkdown  remarkPlugins={[gfm]} children={content}/>
       
     


    </Box>
  );
};
