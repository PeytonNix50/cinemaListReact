import { Component } from 'react';
import { Button } from 'reactstrap';

interface CompletionDeleteProps {
    entryId: number
    clickFunction: () => any
}

interface States {

}

class CompletionDelete extends Component <CompletionDeleteProps, States> {

    constructor (props: CompletionDeleteProps) {
        super(props);
        this.state = {}
    }

    handleDelete = (e: any) => {
        e.preventDefault()
        fetch(`http://localhost:8080/completion/${this.props.entryId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(r => r.json())
          .then(rObj => {console.log(rObj); this.props.clickFunction()})
    }

    render() {
        return(
            <Button onClick={this.handleDelete}>DELETE</Button>
        )
    }
}

export default CompletionDelete;