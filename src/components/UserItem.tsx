import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { Key } from 'readline';

interface UserItemProps {
    data: any
    completionData: () => any
    key: number
}


class UserItem extends React.Component <UserItemProps, {}> {

  constructor(props: UserItemProps) {
      super(props);
      this.state = {};
  }

    render(){
    return(
        <div>
            <h1>Completed:</h1>
            <Card>
                <CardBody>
                    <CardTitle>{this.props.data.movieName}</CardTitle>
                    <CardSubtitle>{this.props.data.rating}</CardSubtitle>
                    <CardSubtitle>{this.props.data.notes}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default UserItem;