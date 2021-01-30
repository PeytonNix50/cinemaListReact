import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import './App.css';

//children: Auth, Navbar 

interface States {
  data: any[]
  plan: any[]
  id: number
  newToken: string | null
}

class App extends React.Component<{}, States> {

  constructor(props: any) {
    super(props);
    this.state = { data: [], plan: [], id: 0, newToken: '' };
  }

  updateToken = (newToken: any, id: any) => {
    this.setState({newToken})
    this.setState({id})
    localStorage.setItem('id', id)
    localStorage.setItem('token', newToken)
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null ) {
      console.log('setting token')
      this.setState({id: parseInt(localStorage.getItem('id') as string)})
      this.setState({newToken: localStorage.getItem('token')})
    }
  }

  clearToken = () => {
    this.setState({newToken: ''})
    this.setState({id: 0})
    localStorage.removeItem('id')
    localStorage.removeItem('token')
  }

  completionData = async () => {
    let r = await fetch(`http://localhost:8080/completion/${this.state.id}`)
    let data = await r.json();
    this.setState({ data })
    console.log(data)
}

planningData = async () => {
  let r = await fetch(`http://localhost:8080/planning/${this.state.id}`)
  let plan = await r.json();
  this.setState({ plan })
  console.log(plan)
}

  render () {
    return (
      <div id='appDiv'>
        { !this.state.newToken ? <Auth updateToken = {this.updateToken} id = {this.state.id} newToken = {this.state.newToken}/> : <Navbar data = {this.state.data} plan={this.state.plan} completionData = {this.completionData} planningData = {this.planningData} id = {this.state.id} newToken = {this.state.newToken} clearToken = {this.clearToken} /> }
        <br/>
        <footer style={{marginTop: '150px', marginLeft: '40px', color: 'white', opacity: '50%'}}>
          <h6>CineList © Peyton Nix</h6>
        </footer>
      </div>
    )
  }
}

export default App;
