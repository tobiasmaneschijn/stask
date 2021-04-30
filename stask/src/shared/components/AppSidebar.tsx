import React from "react";
import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Sidebar,
  Avatar,
  Button,
  Stack,
  Text,
} from "grommet";

import { Help, Projects, Chat, Calendar, User, Configure, Book, Dashboard } from "grommet-icons";
import { AnchorLink } from "./AnchorLink";
import SigninButton, { SignInButton, SignOutButton } from "../authentication/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

export function StaskBar() {
  return (
    <Box>
      <Sidebar
        elevation="small"
        height="100vh"
        round="xsmall"
        responsive={false}
        background="neutral-1"
        header={<SidebarHeader />}
        footer={<SidebarFooter />}
        pad={{ left: "medium", right: "large", vertical: "medium" }}
      >
        <MainNavigation />
      </Sidebar>
    </Box>
  );
}

type SideBarButtonProps = {
  icon: JSX.Element;
  to: string;
  label: string;
};

const SidebarButton = ({ icon, to, label, ...rest }: SideBarButtonProps) => (
  <Box pad="small">
    <AnchorLink icon={icon} to={to} label={label} />
  </Box>
);

const src =
  "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/176057348_1640246192834512_6360554689457193002_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QJH4mCX_c14AX-_JvSL&_nc_ht=scontent-cph2-1.xx&oh=9c086a5bc1d6e3e5bb152b45f399c4b1&oe=60A4F5B8";

const SidebarHeader = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <Box
          align="center"
          gap="small"
          direction="row"
          margin={{ bottom: "large" }}
        >
          <Stack alignSelf="start" anchor="top-right">
            <Avatar src={user.picture} />
            <Box
              pad="xsmall"
              background="lightgreen"
              round
              responsive={false}
            />
          </Stack>
          <Text>{user.given_name + " " + user.family_name}</Text>
        </Box>
      )}
      <SignInButton/>
    </div>
  );
};

const MainNavigation = () => (
  <Nav gap="medium" responsive={false}>
    <SidebarButton to="/" icon={<Dashboard />} label="Dashboard" />
    <SidebarButton to="/assignments" icon={<Projects />} label="Assignments" />
    <SidebarButton to="/courses" icon={<Book/>} label="Courses" />
    <SidebarButton to="/calendar" icon={<Calendar />} label="Calendar" />
  </Nav>
);

const SidebarFooter = () => (
  <Nav>
    <SidebarButton to="/profile" icon={<User />} label="Profile" />
    <SidebarButton to="/settings" icon={<Configure />} label="Settings" />
    <SidebarButton to="/help" icon={<Help />} label="Help" />
    <SignOutButton/>
  </Nav>
);
  