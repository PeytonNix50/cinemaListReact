import { Component } from 'react';
import { Button } from 'reactstrap';

//child of Navbar

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
                <label style={{color: '#7a1b1f', fontWeight: 'bold', backgroundColor: 'black', borderRadius: '5px'}}>Movie or TV Show Name:</label>
                <br/>
                <input style={{borderRadius: '10px'}} onChange={e => this.setState({movieName: e.target.value})}></input>
                <br/>
                <label style={{color: '#7a1b1f', fontWeight: 'bold', backgroundColor: 'black', borderRadius: '5px'}}>Notes:</label>
                <br />
                <input style={{borderRadius: '10px'}} onChange={e => this.setState({notes: e.target.value})}></input>
                <br />
                <label style={{color: '#7a1b1f', fontWeight: 'bold', backgroundColor: 'black', borderRadius: '5px'}}>Rating:</label>
                <br/>
                <select style={{borderRadius: '5px'}} onChange={e => this.setState({rating: parseInt(e.target.value)})}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <br/>
                <Button color='success' onClick={this.newCompletion} style={{marginTop: '10px'}}>Submit</Button>
            </form>
        )}
    }


export default CompletionCreate;