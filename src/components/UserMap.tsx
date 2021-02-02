import React from 'react';
import { Card, CardBody, Row, Col, CardSubtitle } from 'reactstrap'

//child of UserSearch

interface UsernameMapProps {
    rObj: any
    key: number
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
                            <CardSubtitle>{this.props.rObj.movieName}</CardSubtitle>
                        </Col>
                        <Col md='6'>
                            <CardSubtitle>{this.props.rObj.notes}</CardSubtitle>
                        </Col>
                        <Col md='2'>
                            <CardSubtitle>{this.props.rObj.rating}</CardSubtitle>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default UsernameMap;