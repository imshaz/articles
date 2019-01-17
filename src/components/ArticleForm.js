import React, { Component } from 'react'


import { connect } from 'react-redux'
import add_article from '../redux/actions/addArticle'

class ArticleForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

      title: "",
      description: ""
    }

  }

  onTextChange = (event) => {
    event.preventDefault();

    switch (event.target.id) {

      case "articleTitle":
        {
          this.setState({
            title: event.target.value
          })
          break;
        }
      case "articleDescription":
        {
          this.setState({
            description: event.target.value
          })
          break;
        }


      default: {
        console.log("UNKOWN CHANGE")
      }
    }

  }

  onFormSubmit = (event) => {

    event.preventDefault();

    if (this.state.title !== "" && this.state.description !== "") {

      const data = this.state;
      this.setState({
        title: "",
        description: ""
      })

     // this.props.formSubmit(data)

      this.props.addArticles(data)

    }

  }


  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="articleTitle">Article</label>
            <input type="text" value={this.state.title} onChange={this.onTextChange} className="form-control" id="articleTitle" aria-describedby="text" placeholder="Article Title" />                </div>
          <div className="form-group">
            <label htmlFor="articleDescription">Dexcription</label>
            <textarea type="textarea" onChange={this.onTextChange} value={this.state.description} className="form-control" id="articleDescription" placeholder="Description" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addArticles: ({title,description}) => { dispatch(add_article({title,description}))}

  }
}


  export default connect(null, mapDispatchToProps)(ArticleForm)