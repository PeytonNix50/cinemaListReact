import { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import UserItem from './UserItem';
import Planning from './Planning';

interface NavbarProps {
    data: any
    completionData: () => any
    plan: any
    planningData: () => any
}

interface data {
    movieName: string
    rating: number
    notes: string
    owner: number
}

interface plan {
    movieName: string
    interest: string
    progress: number
    owner: number
}

class Navbar extends Component <NavbarProps, {}> {

    constructor (props: NavbarProps) {
        super(props);
        this.state = {};
    }


    render(){
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="">Browse</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button onClick={this.props.planningData}>My List</Button>
                    </NavItem>
                    <NavItem>
                        <input placeholder="Find a User" style={{marginTop: '6px', borderRadius: '10px'}}></input>
                    </NavItem>
                </Nav> 
                {this.props.data.map((data: data, i: number) => <UserItem completionData={this.props.completionData} data={data} key={i} />)}
                {this.props.plan.map((plan: plan, i: number) => <Planning planningData={this.props.planningData} plan={plan} key={i} />)}
            </div>
        )
        }
}

export default Navbar;