import React, { Component } from 'react'
import '../styles/News.scss';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
class News extends Component {
    constructor(props) {
        super(props);
    }
    pushToHistoryArray = (item)=>{
        this.props.setHistoryArray(item)
    }
    render(){
        const listArt = this.props.arr.articleArray.map((item,index) => {
            return (
                <div className="newsContainer" key={`${item.author + item.title + index}`}>
                    <div className="newsContainer__content">
                        <p className="newsContainer__title">{item.title}</p>
                        <p className="newsContainer__description">{item.description}</p>
                        <p>{item.content}</p>
                        <a href={item.url} target="_blank" onClick={()=>this.pushToHistoryArray(item)}>Source</a>
                    </div>
                    <div className="newsContainer__imageContainer">
                        <img className="newsContainer__imageContainer__image" src={item.urlToImage}></img>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {listArt}
    
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setHistoryArray: (item) => dispatch(actions.setHistoryArray(item))
    };
};
export default connect(null,mapDispatchToProps)(News);