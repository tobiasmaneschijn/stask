import { CardContent } from "@material-ui/core";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Header,
  Heading,
  Image,
  Main,
  Stack,
  Text,
} from "grommet";
import { BackgroundType } from "grommet/utils";
import React, { ReactElement } from "react";
import { SignInButton } from "../shared/authentication/LoginButton";

interface Props {}

export default function FrontPage({}: Props): ReactElement {
  /**
   * The background for the front page
   */
  const cardBg: BackgroundType = {
    color: "neutral-1",
  };

  return (
        
    <Main
    pad="large"
    align="center"
    alignSelf="center"
      direction="row"
      alignContent="center"
      justify="center"
      fill
      height={{max: "100%",  min: "100%"}}
      margin="0"
    >
        <Card alignSelf="center" align="center" justify="center" pad="10px" height="medium" width="medium" background="light-1">
          <CardHeader pad="medium"> <Heading  > Stask </Heading> </CardHeader>
          <CardBody pad="medium">Manage your assignments in one place with ease! </CardBody>
          <CardFooter
            pad={{ horizontal: "small" }}
            background="light-1"
          >
            <SignInButton></SignInButton>

          </CardFooter>
        </Card>
    </Main>
   
  );
}
