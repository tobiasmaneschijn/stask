/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

import emoji from 'react-easy-emoji'

import {
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  CardLink,
  CardText,
} from "shards-react";

function AssignmentView({ title, description, links, course, dueDate }) {

    const date = new Date(dueDate)

  return (
    <>
      <Card>
        <CardHeader> {emoji('📚')} {course}</CardHeader>
        <CardImg src="https://place-hold.it/250x150" />
        <CardBody>
          <CardTitle> {title} </CardTitle>
          <p> {description} </p>
          <Button theme="info"> {emoji('📖 ')} </Button>
        </CardBody>
        <CardFooter>  { emoji('⏱️')} {date.toString()} </CardFooter>
      </Card>
    </>
  );
}

AssignmentView.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
  course: PropTypes.string,
  dueDate: PropTypes.string,
};
export default AssignmentView;
