import React from 'react';
import { Button } from 'reactstrap';
import UsernameMap from './UserMap'
import UsernameMap2 from './UsernameMap2'

//child of Navbar
//children: UserMap & UsernameMap2

interface UserSearchProps {
    userData: any
    key: number
}

interface States {
    rObj: any []
    tObj: any []
}

interface rObj {
    movieName: string
    notes: string
    rating: number
}

interface tObj {
    movieName: string
    interest: string
    progress: number
}


class UserSearch extends React.Component <UserSearchProps, States> {

    constructor(props: UserSearchProps) {
        super(props);
        this.state = { rObj: [], tObj: []};
    }

    handleClick = async (e: any) => {
        e.preventDefault()
        let r = await fetch(`http://localhost:8080/completion/${this.props.userData.id}`)
        let rObj = await r.json();
        this.setState({ rObj })
        console.log(rObj)
        let t = await fetch(`http://localhost:8080/planning/${this.props.userData.id}`)
        let tObj = await t.json();
        this.setState({ tObj })
        console.log(tObj)
    }

    render() {
        return(
            <div style={{marginTop: '10px', marginLeft: '20px', textAlign: 'center'}}>
                <Button onClick={this.handleClick} style={{marginTop: '5px', marginBottom: '5px', backgroundColor:'#5f1417', borderColor: '#5f1417', borderRadius: '40px'}}>{this.props.userData.username}</Button>
                {this.state.rObj.map((rObj: rObj, i: number) => <UsernameMap rObj = {rObj} key={i} />)}
                <br />
                {this.state.tObj.map((tObj: tObj, i: number) => <UsernameMap2 tObj = {tObj} key={i} />)}
            </div>
        )
    }

}

export default UserSearch;