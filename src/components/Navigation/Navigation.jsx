import React from "react";
import './nav.scss'
import { NavLink } from "react-router-dom";

class Navigaton extends React.Component {

    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                <NavLink to='/user'>User</NavLink>

            </div>
        )
    }
}

export default Navigaton;   