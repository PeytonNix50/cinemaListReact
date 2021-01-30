import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import PlanningCreate from './PlanningCreate'
import PlanningDelete from './PlanningDelete'

interface PlanningProps {
    plan: any
    clickFunction: () => any
    key: number
    newToken: string | null
}


class Planning extends React.Component <PlanningProps, {}> {

  constructor(props: PlanningProps) {
      super(props);
      this.state = {};
  }

    render(){
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{this.props.plan.movieName}</CardTitle>
                    <CardSubtitle>{this.props.plan.interest}</CardSubtitle>
                    <CardSubtitle>{this.props.plan.progress}</CardSubtitle>
                    <PlanningDelete clickFunction = {this.props.clickFunction} entryId = {this.props.plan.id} />
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default Planning;