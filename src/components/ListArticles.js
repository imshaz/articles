import React, { Component } from 'react'; 
import uuidv3 from 'uuid'; 

import {connect} from 'react-redux'; 


 class ListArticles extends Component {


    render() {
        const {articles} = this.props;
     
        return (
            <div>
                <div>
                    {
                       articles.map(article => {
                            return (<div key={uuidv3()} className="text-justify">
                                <h3 className="">{article.title} </h3>
                                <p className=""> {article.description}</p>
                            </div>)
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    //console.log(state.articleReducer)
    const {articles} = state.articleReducer;
    return {articles};

}


export default connect(mapStateToProps)(ListArticles);
