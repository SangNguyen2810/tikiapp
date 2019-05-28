import React, { Component } from 'react';
import "../styles/navbar.scss"
import logo from "../styles/twitter.png"
import defaultAvatar from "../styles/default.png"
import { withRouter } from 'react-router-dom'
import * as actions from '../actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'newspage'
        }
    }
    login = () => {
        this.props.history.push('/login');
    }
    logout = (user) => {
        this.props.logoutUser(user);
    }
    changeStateNav= (navState) => {
        this.setState({
            active: navState
        })
    }
    renderUserLogging = (isAuthenticated, user) => {
        if (isAuthenticated) {
            return (
                <ul className="navbar-nav ml-auto navbarCustom">
                    <li className="nav-item">
                        <a className="nav-link navbarCustom__link" onClick={() => this.logout(user)}>
                            <img className="rounded-circle avatar" src={defaultAvatar}></img>
                            Log Out
                        </a>


                    </li>

                </ul>
            )
        }
        else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="btn nav-link" onClick={() => this.login()}>
                            Login
                    </a>
                    </li>
                </ul>
            )
        }
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        let logging = this.renderUserLogging(isAuthenticated, user);
        return (
       
            <nav className="navbar navbar-expand-sm navbar-dark mb-4 mainNavbar">
                <div className="container">
                    <img className="mainNavbar__logo" src={logo} />
                    <Link to={`/newsPage`} className={this.state.active === 'newspage' ? 'active' : null}
                     onClick={()=>this.changeStateNav('newspage')}>
                        NewsPage
                    </Link>
                    <Link to={`/historypage`} className={this.state.active === 'historypage' ? 'active' : null} 
                    onClick={()=>this.changeStateNav('historypage')}>
                        History Page
                    </Link>
                    {logging}
                </div>
            </nav >
        );
    }
}

Navbar.propTypes = {
    // logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loading: (loadingStatus) => dispatch(actions.isLoading(loadingStatus)),
        logoutUser: (user) => dispatch(actions.logoutUser(user))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));