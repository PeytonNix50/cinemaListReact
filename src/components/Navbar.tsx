import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import UserItem from './UserItem';
import Planning from './Planning';
import CompletionCreate from './CompletionCreate';
import PlanningCreate from './PlanningCreate';
import UserSearch from './UserSearch';

//child of App (contains most content of page as well)
//children: UserItem, Planning, CompletionCreate, PlanningCreate, UserSearch

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

interface States {
    user: string
    userData: any[]
}

interface userData {
    username: string
}

class Navbar extends Component <NavbarProps, States> {

    constructor (props: NavbarProps) {
        super(props);
        this.state = { user: '', userData: []};
    }

    clickFunction = () => {
        this.props.completionData()
        this.props.planningData()
        this.setState({ userData: [] })
    }

    handleLogout = (e: any) => {
        e.preventDefault()
        this.props.clearToken()
    }

    userSearch = async (e: any) => {
        e.preventDefault()
        let r = await fetch(`http://localhost:8080/user/${this.state.user}`)
        let userData = await r.json();
        this.setState({ userData })
        console.log(userData)
    }
    
    browseFunction = (e: any) => {
        e.preventDefault()
        console.log('Browse is still a work in progress!')
    }

    render(){
        return (
            <div>
                <Nav style={{marginTop: '10px'}}>
                    <NavItem>
                        <Button onClick={this.browseFunction} style={{marginLeft: '20px', backgroundColor:'#5f1417', borderColor: '#5f1417'}}>Browse</Button>
                    </NavItem>
                    <NavItem>
                        <Button style={{marginLeft: '20px', backgroundColor:'#5f1417', borderColor: '#5f1417'}} onClick={this.clickFunction}>My List</Button>
                    </NavItem>
                    <NavItem>
                        <input onChange={e => this.setState({user: e.target.value})} placeholder="Find a User" style={{marginTop: '4px', borderRadius: '10px', marginLeft:'20px'}}></input>
                    </NavItem>
                    <NavItem>
                        <Button onClick={this.userSearch} style={{borderRadius: '10px', height: '30px', fontSize: '12px', marginTop: '5px', backgroundColor:'#5f1417', borderColor: '#5f1417'}}>Search</Button>
                    </NavItem>
                    <NavItem>
                        <Button onClick={this.handleLogout} style={{marginLeft: '20px', backgroundColor:'#5f1417', borderColor: '#5f1417'}}>Logout</Button>
                    </NavItem>
                </Nav> 
                { this.state.userData.length === 0 ? <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <h1 style={{color: '#7a1b1f', fontWeight: 'bold', borderColor: 'black', borderRadius: '5px'}}>Completed:</h1>
                    {this.props.data.map((data: data, i: number) => <UserItem clickFunction = {this.clickFunction} completionData={this.props.completionData} data={data} key={i} newToken={this.props.newToken} />)}
                    <CompletionCreate clickFunction = {this.clickFunction} newToken={this.props.newToken} />
                    <h1 style={{color: '#7a1b1f', fontWeight: 'bold', borderColor: 'black', borderRadius: '5px'}}>Planning:</h1>
                    {this.props.plan.map((plan: plan, i: number) => <Planning clickFunction = {this.clickFunction} plan={plan} key={i} newToken={this.props.newToken} />)}
                    <PlanningCreate clickFunction = {this.clickFunction} newToken = {this.props.newToken} />
                </div> :
                <div>
                    <h3 style={{color: '#5f1417', textAlign: 'center', marginTop: '20px'}}>Click a User to see their CineList!</h3>
                    {this.state.userData.map((userData: userData, i: number) => <UserSearch userData = {userData} key={i} />)}
                </div> }
            </div>
        )
        }
}

export default Navbar;