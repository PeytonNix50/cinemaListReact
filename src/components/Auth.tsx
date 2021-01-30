import React from 'react';
import { Button } from 'reactstrap';

interface AuthProps {
    updateToken: (newToken: string, id: number) => any
    id: number
    newToken: string | null
}

interface States {
    login: boolean
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    id: number
}

class Auth extends React.Component <AuthProps, States> {

    constructor (props: AuthProps) {
        super(props);
        this.state = { login: false, firstName: '', lastName: '', email: '', password:'', username: '', id: 0 };
    }

    loginToggle = (e:any) => {
        e.preventDefault()
        this.setState({login: !this.state.login })
    }

    handleSubmit = (e: any) => {
        e.preventDefault()
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            isAdmin: false
        }
        if (this.state.password.length > 5 ) {
            fetch(`http://localhost:8080/user/${this.state.login ? 'login' : 'register'}`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(r => r.json())
            .then(rObj => {console.log(rObj); this.props.updateToken(rObj.sessionToken, rObj.user.id)})
        } else {
            window.alert('Password must be at least 6 characters')
        }
    }

     signupFields = () => {
        if (this.state.login) {
            return null
        } else {
            return (
                <div>
                    <label>First Name: </label>
                    <br/>
                    <input onChange={e => this.setState({firstName: e.target.value})}></input>
                    <br/>
                    <label>Last Name: </label>
                    <br/>
                    <input onChange={e => this.setState({lastName: e.target.value})}></input>
                    <br/>
                    <label>Username: </label>
                    <br/>
                    <input onChange={e => this.setState({username: e.target.value})}></input>
                </div>
            )
        }
    }

    render(){
        return(
            <form>
                <h1>{ this.state.login ? 'Login' : 'Register' }</h1>
                <label>Email: </label>
                <br/>
                <input onChange={e => this.setState({email: e.target.value})}></input>
                <br/>
                <label>Password: </label>
                <br/>
                <input onChange={e => this.setState({password: e.target.value})}></input>
                <br/>
                {this.signupFields()}
                <br/>
                <Button onClick={this.loginToggle}>{this.state.login ? 'Click Here to Register' : 'Click Here to Login'}</Button>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }

}

export default Auth