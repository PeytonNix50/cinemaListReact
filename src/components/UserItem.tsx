import React from 'react';
import { Card, CardBody, CardSubtitle, Row, Col } from 'reactstrap';
import CompletionDelete from './CompletionDelete';

//child of Navbar

//children: CompletionDelete

interface UserItemProps {
    data: any
    completionData: () => any
    key: number
    newToken: string | null
    clickFunction: () => any
}


class UserItem extends React.Component <UserItemProps, {}> {

  constructor(props: UserItemProps) {
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
                            <CardSubtitle>{this.props.data.movieName}</CardSubtitle>
                        </Col>
                        <Col md='6'>
                            <CardSubtitle>{this.props.data.notes}</CardSubtitle>
                        </Col>
                        <Col md='2'>
                            <CardSubtitle>{this.props.data.rating}</CardSubtitle>
                        </Col>
                        <Col md='2'>
                            <CompletionDelete clickFunction = {this.props.clickFunction} entryId = {this.props.data.id} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default UserItem;