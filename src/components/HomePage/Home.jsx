import React from "react";
import { connect } from "react-redux";
import Color from "../HOC/Color";
import './home.scss'
import { toast } from "react-toastify";

class HomePage extends React.Component {

    state = {
        editTitle: {}
    }

    // componentDidMount() {
    //     console.log('>>> Check map state to props: ', this.props)
    //     let titleCopy = this.props.dataRedux
    //     this.setState({
    //         newTitle: titleCopy
    //     })
    // }

    handleDelete = (title) => {
        console.log('>>>Check user delete: ', this.props)
        console.log('>>> Check user: ', title)
        this.props.deleteTitle(title)
    }

    // handleEdit = (user) => {

    //     console.log('vv', this.props.dataRedux)

    //     //Edit
    //     this.setState({
    //         editTitle: user
    //     })
    //     console.log('user', user)
    //     this.props.EditTitle(user)

    // }

    handleEdit = (user) => {
        const { editRedux } = this.props;
        console.log('editRedux.id11', editRedux)
        console.log('user.id', user.id)
        if (editRedux.id !== user.id) {
            //Edit
            this.setState({
                editTitle: user
            })
            this.props.EditTitle(user);
        } else {
            this.props.saveTitle(user); // Gọi action SAVE_TITLE khi đang chỉnh sửa và click "Save"
        }
    }

    handleOnchangeInput = (event) => {
        let { editTitle } = this.state
        console.log('aa', this.props.editRedux)
        let editTitleCopy = this.props.editRedux
        editTitleCopy.course = event.target.value
        this.setState({
            editTitle: editTitleCopy
        })
        console.log('editTitleCopy11', editTitle)
    }


    render() {
        let { editTitle } = this.state
        console.log('editTitle121', editTitle)
        let isEmptyObj = Object.keys(this.props.editRedux).length === 0
        console.log('>>>Chekc isEmptyObj', isEmptyObj)
        console.log('editRedux.id', this.props.editRedux.course)

        return (
            <div className="container">
                <div className="title">List Title</div>
                <div className="title-list-content">
                    {this.props.dataRedux && this.props.dataRedux.length > 0 && this.props.dataRedux.map((item, index) => {
                        return (
                            <>
                                <div className="child" key={item.id}>
                                    {isEmptyObj === true
                                        ?
                                        <span> {index + 1} - {item.course}</span>
                                        :
                                        <>
                                            {this.props.editRedux.id === item.id
                                                ?
                                                <span>{index + 1} - <input type="text" value={this.props.editRedux.course} onChange={(e) => { this.handleOnchangeInput(e) }} /></span>
                                                :
                                                <span> {index + 1} - {item.course}</span>}
                                        </>
                                    }

                                    {/* <input type="text" value={item.course} /> */}
                                    <></>
                                    <button onClick={() => { this.handleEdit(item) }}>
                                        {
                                            isEmptyObj === false && this.props.editRedux.id === item.id ? 'Save' : 'Edit'
                                        }
                                    </button> <></>
                                    <button onClick={() => { this.handleDelete(item) }}>Delete</button>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.title,
        editRedux: state.editTitle
    }
}

const mapDispathToProps = (dispath) => {
    return {
        deleteTitle: (titleDelete) => { return dispath({ type: 'DELETE_USER', payload: titleDelete }) },
        EditTitle: (titleEdit) => { return dispath({ type: 'EDIT_TITLE', payload: titleEdit }) },
        saveTitle: (titleSave) => { return dispath({ type: 'SAVE_TITLE', payload: titleSave }) }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Color(HomePage))