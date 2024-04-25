import React from "react";
import './todo.scss'
import AddTodo from "./AddToDoComponent";

import Color from "../HOC/Color";
import { toast } from "react-toastify";

class todoComponent extends React.Component {

    state = {
        listTodo: [
            { id: 1, job: 'gammer' },
            { id: 2, job: 'youtuber' },
            { id: 3, job: 'Teacher' }
        ],
        editTodo: {},
        status: false
    }

    addJob = (newjob) => {
        let listNewTodo = [...this.state.listTodo, newjob]
        this.setState({
            listTodo: listNewTodo
        })

    }

    handleDelete = (item) => {
        let arrJob = this.state.listTodo
        arrJob = arrJob.filter((job) => {
            return job.id !== item.id
        })
        console.log(arrJob)
        this.setState({
            listTodo: arrJob
        })
        toast.success('Delete successFul')
    }

    handleEditTodo = (job) => {

        let { listTodo, editTodo } = this.state
        let listTodoCopy = [...listTodo]
        let isEmptyObj = Object.keys(job).length === 0
        if (isEmptyObj === false && job.id === editTodo.id) {
            //Find index of specific object using findIndex method.    
            let objIndex = listTodoCopy.findIndex((item) => item.id == job.id);

            //Log object to Console.
            console.log("Before update: ", listTodoCopy[objIndex])

            //Update object's name property.
            listTodoCopy[objIndex].job = editTodo.job
            if (editTodo.job === '') {
                toast.error('Missing value')
                return
            } else {
                this.setState({
                    listTodo: listTodoCopy,
                    editTodo: {}
                })
                toast.success('Edit Successful')
            }

            return
        }


        //edit
        this.setState({
            editTodo: job
        })
    }

    handleInputEdit = (event) => {
        let { editTodo } = this.state
        let editTodoCopy = { ...editTodo }
        console.log('editTodoCopy', editTodoCopy)
        editTodoCopy.job = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleShowHide = () => {
        let { status } = this.state
        this.setState({
            status: !status
        })
        console.log('status', this.state.status)
    }


    render() {
        const { listTodo, editTodo, status } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className="todo-container">
                <div>Todo</div>
                <AddTodo addJob={this.addJob} />

                {status === false ? <button onClick={() => { this.handleShowHide() }}>Show</button>
                    :
                    <div className="list-content">
                        {listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {isEmptyObj === true ? <span>  {index + 1} - {item.job}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id
                                                ?
                                                <span>{index + 1} - <input type="text" value={editTodo.job} onChange={(e) => { this.handleInputEdit(e) }} /></span>
                                                :
                                                <span>  {index + 1} - {item.job}</span>
                                            }

                                        </>
                                    }
                                    <></> <button onClick={() => { this.handleEditTodo(item) }}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}

                                    </button> <></>

                                    <button onClick={() => { this.handleDelete(item) }}>Delete</button>

                                </div>
                            )
                        })}
                        <button onClick={() => { this.handleShowHide() }} >Hide</button>
                    </div>
                }
            </div>
        )
    }
}

export default Color(todoComponent);