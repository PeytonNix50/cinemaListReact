import { Component } from 'react';
import { Button } from 'reactstrap';

//child of Navbar

interface PlanningCreateProps {
    newToken: string | null
    clickFunction: () => any
}

interface States {
    movieName: string
    interest: string
    progress: number
    owner: number
}

class PlanningCreate extends Component <PlanningCreateProps, States> {
    
    constructor (props: PlanningCreateProps) {
        super(props);
        this.state= {movieName: '', interest: '', progress: 0, owner: 0};
    }

    newPlanning = (e: any) => {
        e.preventDefault()
        const body = {
            movieName: this.state.movieName,
            interest: this.state.interest,
            progress: this.state.progress,
            owner: this.state.owner
        }
        fetch(`http://localhost:8080/planning/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.newToken != null ? this.props.newToken : '',
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
          .then(rObj => {console.log(rObj); this.props.clickFunction()})
    }

    render(){
        return(
            <form>
                <label style={{color: '#7a1b1f', fontWeight: 'bold', backgroundColor: 'black', borderRadius: '5px'}}>Movie or TV Show Name:</label>
                <br/>
                <input style={{borderRadius: '10px'}} onChange={e => this.setState({movieName: e.target.value})}></input>
                <br/>
                <label style={{color: '#7a1b1f', fontWeight: 'bold', backgroundColor: 'black', borderRadius: '5px'}}>Interest from:</label>
                <br/>
                <input style={{borderRadius: '10px'}} onChange={e => this.setState({interest: e.target.value})}></input>
                <br/>
                <label style={{color: '#7a1b1f', fontWeight: 'bold', borderColor: 'black', backgroundColor: 'black', borderRadius: '5px'}}>Progress:</label>
                <br/>
                <input style={{borderRadius: '10px'}} type='number' onChange={e => this.setState({progress: parseInt(e.target.value)})}></input>
                <br/>
                <Button style={{marginTop: '10px'}} onClick={this.newPlanning} color='success'>Submit</Button>
            </form>
        )
    }

}

export default PlanningCreate;