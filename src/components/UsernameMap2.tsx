import React from 'react';
import { Card, CardBody, Row, Col, CardSubtitle } from 'reactstrap'

interface UsernameMapProps {
    key: number
    tObj: any
}

interface States {

}

class UsernameMap extends React.Component <UsernameMapProps, States> {

    constructor(props: UsernameMapProps) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Card>
                <CardBody>
                    <Row>
                        <Col md='2'>
                            <CardSubtitle>{this.props.tObj.movieName}</CardSubtitle>
                        </Col>
                        <Col md='6'>
                            <CardSubtitle>{this.props.tObj.notes}</CardSubtitle>
                        </Col>
                        <Col md='2'>
                            <CardSubtitle>{this.props.tObj.progress}</CardSubtitle>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default UsernameMap;