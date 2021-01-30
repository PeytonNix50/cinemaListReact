import { Component } from 'react';
import { Button } from 'reactstrap';

interface PlanningDeleteProps {
    clickFunction: () => any
    entryId: number
}

interface States {

}

class PlanningDelete extends Component <PlanningDeleteProps, States> {
    
    constructor (props: PlanningDeleteProps) {
        super(props);
        this.state = {}
    }

    handleDelete = (e: any) => {
        e.preventDefault()
        fetch(`http://localhost:8080/planning/${this.props.entryId}`, {
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

export default PlanningDelete;