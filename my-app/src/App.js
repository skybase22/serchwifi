import React, { Component } from "react";
//import { Grid, Row, Col } from "react-bootstrap";
import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/home"
      )
      .then(res => {
        const posts = res.data.toString(obj => obj.data);
        
        this.setState({ posts });
        //console.log(posts);
       
      })
      .catch(error => {
        console.log((error));
      });
  }

  render() {
    
    
    return (
      <div>
        
         
            <h1>fetched data</h1>
    
              {this.state.posts}
            
         </div>
        
      
    );
  }
}
export default App;  