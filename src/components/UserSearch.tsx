import React from 'react';
import { Button } from 'reactstrap';

//child of Navbar
//children: tbd

interface UserSearchProps {
    userData: any
    key: number
}

interface States {

}


class UserSearch extends React.Component <UserSearchProps, States> {

    constructor(props: UserSearchProps) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div style={{marginTop: '10px', marginLeft: '20px', textAlign: 'center'}}>
                <Button style={{marginTop: '5px', marginBottom: '5px', backgroundColor:'#5f1417', borderColor: '#5f1417', borderRadius: '40px'}}>{this.props.userData.username}</Button>
            </div>
        )
    }

}

export default UserSearch;