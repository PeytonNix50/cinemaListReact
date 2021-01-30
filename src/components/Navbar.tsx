import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import UserItem from './UserItem';
import Planning from './Planning';
import CompletionCreate from './CompletionCreate';
import PlanningCreate from './PlanningCreate';

interface NavbarProps {
    data: any
    completionData: () => any
    plan: any
    planningData: () => any
    id: number
    newToken: string | null
    clearToken: () => any
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

    clickFunction = () => {
        this.props.completionData()
        this.props.planningData()
    }

    handleLogout = (e: any) => {
        e.preventDefault()
        this.props.clearToken()
    }


    render(){
        return (
            <div>
                <Nav>
                    <NavItem>
                        <Button>Browse</Button>
                    </NavItem>
                    <NavItem>
                        <Button onClick={this.clickFunction}>My List</Button>
                    </NavItem>
                    <NavItem>
                        <input placeholder="Find a User" style={{marginTop: '6px', borderRadius: '10px'}}></input>
                    </NavItem>
                    <NavItem>
                        <Button onClick={this.handleLogout}>Logout</Button>
                    </NavItem>
                </Nav> 
                <h1>Completed:</h1>
                {this.props.data.map((data: data, i: number) => <UserItem clickFunction = {this.clickFunction} completionData={this.props.completionData} data={data} key={i} newToken={this.props.newToken} />)}
                <CompletionCreate clickFunction = {this.clickFunction} newToken={this.props.newToken} />
                <h1>Planning:</h1>
                {this.props.plan.map((plan: plan, i: number) => <Planning clickFunction = {this.clickFunction} plan={plan} key={i} newToken={this.props.newToken} />)}
                <PlanningCreate clickFunction = {this.clickFunction} newToken = {this.props.newToken} />
            </div>
        )
        }
}

export default Navbar;