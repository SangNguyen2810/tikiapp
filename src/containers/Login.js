import React from 'react'
import '../styles/Login.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingComponent from '../components/Loading'
import * as actions from '../actions/authActions';
import PropTypes from 'prop-types'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentWillReceiveProps(nextProps){
        
    }
    submit = (e,loading) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        localStorage.setItem('user', user);
        this.props.setCurrentUser(user);
        loading(true);
        this.props.history.push('/newspage');

    }
    render() {
        if (this.props.isLoading) {
            return <LoadingComponent />
        }
        else
            return (
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <h1 className="display-4 text-center">Login</h1>
                                <form noValidate onSubmit={(e) => this.submit(e,this.props.loading)}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className='form-control form-control-lg'
                                            placeholder="Name"
                                            name="username"
                                            value={this.state.username}
                                            onChange={(e) => this.onChange(e)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className='form-control form-control-lg'
                                            placeholder="Password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={(e) => this.onChange(e)}
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-info btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.loading,
        auth: state.auth,
        errors: state.errors
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loading: (loadingStatus) => dispatch(actions.isLoading(loadingStatus)),
        setCurrentUser: (user) =>dispatch(actions.setCurrentUser(user))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));