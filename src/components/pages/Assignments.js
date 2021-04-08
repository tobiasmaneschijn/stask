
import React from 'react';

import AssignmentView from "../components/AssignmentView";
import { getSortedAssignments } from "../../data/dataUtils";
import { Container, Row } from 'shards-react';

import "./AssignmentPage.css"


const AssignmentsPage = () => {

  const renderAssignments = () => {
      const assignments = getSortedAssignments()

      

      return assignments.map((assignment) => {

        return (
          <div className="assignmentsGrid" key={assignment.id}> <AssignmentView  title={assignment.title}  description={assignment.description} links={assignment.links} course={assignment.course} dueDate={assignment.dueDate} /> </div>
           
          )

      })
  }

  return <>

        <Container fluid={true } > <Row>{ renderAssignments()}</Row> </Container>  

  </>;
};

export default AssignmentsPage;
