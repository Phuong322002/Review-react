import React from "react";
import { toast } from 'react-toastify';
class addTodo extends React.Component {

    state = {
        job: ''
    }

    handleInput = (event) => {
        this.setState({
            job: event.target.value
        })
    }

    handleAdd = () => {
        if (this.state.job === '') {
            toast.error('Missing value');
            return
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 100),
            job: this.state.job
        })
        this.setState({
            job: ''
        })
        toast.success("Add successful")
    }

    render() {
        return (
            <div>
                <div className="add-todo">
                    <input type="text" value={this.state.job} onChange={(e) => { this.handleInput(e) }} />
                    <button onClick={() => { this.handleAdd() }}>Add</button>
                </div>
            </div>
        )
    }
}

export default addTodo;