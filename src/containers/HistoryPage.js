import React, { Component } from 'react'
import '../styles/Dashboard.scss';
import News from './News'
import { connect } from 'react-redux';

class HistoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="container">
                <News arr={this.props.historyArticle}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        historyArticle: state.historyArticle,
        
    };
};
export default connect(mapStateToProps, null) (HistoryPage);