import React from 'react';
import { Button } from 'reactstrap';

//child of App

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
                <div style={{border: '10px', borderColor: 'black'}}>
                    <label style={{color: '#7a1b1f', fontWeight: 'bold'}}>First Name: </label>
                    <br/>
                    <input onChange={e => this.setState({firstName: e.target.value})}></input>
                    <br/>
                    <label style={{color: '#7a1b1f', fontWeight: 'bold'}}>Last Name: </label>
                    <br/>
                    <input onChange={e => this.setState({lastName: e.target.value})}></input>
                    <br/>
                    <label style={{color: '#7a1b1f', fontWeight: 'bold'}}>Username: </label>
                    <br/>
                    <input onChange={e => this.setState({username: e.target.value})}></input>
                </div>
            )
        }
    }

    render(){
        return(
            <form style={{width: '100%', textAlign: 'center', marginTop:'50px', backgroundColor: 'transparent'}}>
                <h1 style={{color: '#7a1b1f', fontWeight: 'bold'}}>Welcome to CineList</h1>
                <h4 style={{color: '#7a1b1f', fontWeight: 'bold'}}>{ this.state.login ? 'Login' : 'Register to begin!' }</h4>
                <label style={{color: '#7a1b1f', fontWeight: 'bold'}}>Email: </label>
                <br/>
                <input onChange={e => this.setState({email: e.target.value})}></input>
                <br/>
                <label style={{color: '#7a1b1f', fontWeight: 'bold'}}>Password: </label>
                <br/>
                <input type='password' onChange={e => this.setState({password: e.target.value})}></input>
                <br/>
                {this.signupFields()}
                <br/>
                <Button style={{marginRight: '5px', backgroundColor:'#5f1417', borderColor: 'black'}} onClick={this.loginToggle}>{this.state.login ? 'Click Here to Register' : 'Click Here to Login'}</Button>
                <Button style={{backgroundColor:'#5f1417', borderColor: 'black'}} onClick={this.handleSubmit}>Submit</Button>
            </form>
        )
    }

}

export default Auth