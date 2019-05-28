import React, { Component } from 'react'
import LoadingComponent from '../components/Loading'
import '../styles/Dashboard.scss';
import News from './News'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import { baseURL } from '../utils/URL';
import { APIKEY } from '../utils/apiKey'
class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: ''
        };
    }
    componentWillMount() {
        this.props.loading(true);
    }
    componentDidMount() {
        this.props.getAllPost(`${baseURL}&${APIKEY}`)
    }
    searchArticle = (e) => {
        const query = `q=${e.target.value}`;
        this.setState({
            searching: e.target.value
        })
        this.props.searchArticle(`${baseURL}&${query}&${APIKEY}`)
    }
    loadMore = () => {
        const page = `page=${this.props.article.page}`
        let query = `q=${this.state.searching}`;

        this.props.getAllPost(`${baseURL}&${query}&${page}&${APIKEY}`)
    }
    render() {
        if (this.props.isLoading) {
            return <LoadingComponent />
        }
        else {

            return (
                <div className="container">
                    <div className="searchArea">
                        <form className="form-inline">
                            <input className="form-control searchArea__searchBox" type="search" placeholder="Search for articles" aria-label="Search"
                                onChange={(e) => this.searchArticle(e)} />
                        </form>
                    </div>
                    <div>
                        <News arr={this.props.article} />
                    </div>
                    <div>
                        <button disabled={this.props.article.currentResult === this.props.article.totalResult} className="btn btn-info btn-block mt-4" onClick={()=>this.loadMore()}>Load More</button>
                    </div>
                </div>

            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loading,
        auth: state.auth,
        article: state.article,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loading: (loadingStatus) => dispatch(actions.isLoading(loadingStatus)),
        setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
        getAllPost: (baseURL) => dispatch(actions.getAllPost(baseURL)),
        searchArticle: (URL) => dispatch(actions.searchArticle(URL))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsPage));