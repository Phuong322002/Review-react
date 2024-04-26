import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import './detailUser.scss'
import Color from "../HOC/Color";

class DetailCoponent extends React.Component {

    state = {
        detailUser: {}
    }

    async componentDidMount() {
        console.log('>>> Check user delete: ', this.props.match.params)
        let id = this.props.match.params.id;
        console.log('id', id)

        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log('tets', res.data.data)
        this.setState({
            detailUser: res && res.data && res.data.data ? res.data.data : {}
        })
    }

    handleBack = () => {
        this.props.history.push('/user')
    }

    render() {
        const { detailUser } = this.state
        console.log('detailUser', detailUser)
        return (
            <div className="detail-container">
                <div className="title">Detail User</div>
                <div className="user-content">
                    <div className="fullName">Full Name: {detailUser.first_name} {detailUser.last_name}</div>
                    <div className="email">Email: {detailUser.email}</div>
                    <img src={detailUser.avatar} alt="" />
                </div>
                <button className="btn-back" onClick={() => { this.handleBack() }}>Back</button>
            </div>
        )
    }
}

export default withRouter(Color(DetailCoponent));