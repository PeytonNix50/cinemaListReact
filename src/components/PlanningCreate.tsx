import { Component } from 'react';
import { Button } from 'reactstrap';

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
                <label>Movie Name:</label>
                <br/>
                <input onChange={e => this.setState({movieName: e.target.value})}></input>
                <br/>
                <label>Interest from:</label>
                <br/>
                <input onChange={e => this.setState({interest: e.target.value})}></input>
                <br/>
                <label>Progress:</label>
                <br/>
                <input type='number' onChange={e => this.setState({progress: parseInt(e.target.value)})}></input>
                <br/>
                <Button onClick={this.newPlanning}>Submit</Button>
            </form>
        )
    }

}

export default PlanningCreate;