import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

interface PlanningProps {
    plan: any
    planningData: () => any
    key: number
}


class Planning extends React.Component <PlanningProps, {}> {

  constructor(props: PlanningProps) {
      super(props);
      this.state = {};
  }

    render(){
    return(
        <div>
             <h1>Planning:</h1>
            <Card>
                <CardBody>
                    <CardTitle>{this.props.plan.movieName}</CardTitle>
                    <CardSubtitle>{this.props.plan.interest}</CardSubtitle>
                    <CardSubtitle>{this.props.plan.progress}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default Planning;