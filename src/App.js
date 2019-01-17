import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleForm from './components/ArticleForm';
import ListArticles from './components/ListArticles';
import store from './redux/store'

class App extends Component {
  

  render() {
    // const {articles} = store.getState(); 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>


            <div className="container"> 

              <div className="row"> 
                    <div className="col-8 listArticles"> 
                        <ListArticles articles={store.getState() }/> 
                    </div> 
                    <div className="col-4"> 
                        <ArticleForm formSubmit={this.formSubmit}/> 
                    </div> 
                </div> 

            </div> 
        
      </div>
    );
  }
}

export default App;
