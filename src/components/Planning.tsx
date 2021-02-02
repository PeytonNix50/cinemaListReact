import React from 'react';
import { Card, CardBody, CardSubtitle, Row, Col } from 'reactstrap';
import PlanningDelete from './PlanningDelete'

//child of Navbar
//children: PlanningDelete

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
                    <Row>
                        <Col md='2'>
                            <CardSubtitle>{this.props.plan.movieName}</CardSubtitle>
                        </Col>
                        <Col md='6'>
                            <CardSubtitle>{this.props.plan.interest}</CardSubtitle>
                        </Col>
                        <Col md='2'>
                            <CardSubtitle>{this.props.plan.progress}</CardSubtitle>
                        </Col>  
                        <Col md='2'>
                            <PlanningDelete clickFunction = {this.props.clickFunction} entryId = {this.props.plan.id} />
                        </Col>                      
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default Planning;