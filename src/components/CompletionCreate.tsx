import { Component } from 'react';
import { Button } from 'reactstrap';

interface CompletionCreateProps {
    newToken: string | null
    clickFunction: () => any
}

interface States {
    movieName: string
    rating: number
    notes: string
    owner: number
}

class CompletionCreate extends Component <CompletionCreateProps, States> {
    
    constructor (props: CompletionCreateProps) {
        super(props);
        this.state= { movieName: '', rating: 0, notes: '', owner: 0 }
    }

    newCompletion = (e: any) => {
        e.preventDefault()
        const body = {
            movieName: this.state.movieName,
            rating: this.state.rating,
            notes: this.state.notes,
            owner: this.state.owner
        }
        fetch(`http://localhost:8080/completion/`, {
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
                <label>MovieName:</label>
                <br/>
                <input onChange={e => this.setState({movieName: e.target.value})}></input>
                <br/>
                <label>Rating:</label>
                <br/>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                <label>Notes:</label>
                <br/>
                <input onChange={e => this.setState({notes: e.target.value})}></input>
                <br/>
                <Button onClick={this.newCompletion}>Submit</Button>
            </form>
        )}
    }


export default CompletionCreate;