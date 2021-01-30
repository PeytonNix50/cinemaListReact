import React from 'react';

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
            <div>
                <h3>{this.props.userData.username}</h3>
            </div>
        )
    }

}

export default UserSearch;