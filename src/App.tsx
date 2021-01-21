import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './components/Auth';

interface States {
  data: any[]
  plan: any[]
  id: number
  newToken: string
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

  completionData = async () => {
    let r = await fetch(`http://localhost:8080/completion`)
    let data = await r.json();
    this.setState({ data })
    console.log(data)
}

planningData = async () => {
  let r = await fetch(`http://localhost:8080/planning`)
  let plan = await r.json();
  this.setState({ plan })
  console.log(plan)
}

  render () {
    return (
      <div>
        <Navbar data = {this.state.data} plan={this.state.plan} completionData = {this.completionData} planningData = {this.planningData} />
        <Auth updateToken = {this.updateToken} id = {this.state.id} newToken = {this.state.newToken}/>
      </div>
    )
  }
}

export default App;
