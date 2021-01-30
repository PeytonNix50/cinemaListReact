import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import CompletionDelete from './CompletionDelete';

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
                    <CardTitle>{this.props.data.movieName}</CardTitle>
                    <CardSubtitle>{this.props.data.rating}</CardSubtitle>
                    <CardSubtitle>{this.props.data.notes}</CardSubtitle>
                    <CompletionDelete clickFunction = {this.props.clickFunction} entryId = {this.props.data.id} />
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default UserItem;