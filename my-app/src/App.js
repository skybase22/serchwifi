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
        console.log('res.data',  res )
        // const posts = res.data.toString(obj => obj.data);
        const post = res.data
        this.setState({ posts:post });
        //console.log(this.state.posts);
        console.log('psots1',this.state.posts[1].student);
       
      })
      .catch(error => {
        console.log((error));
      });
  }

  render() {
   
    
    return (
      <div>
        
         
            <h1>fetched data</h1>
            
            <ul>
              {this.state.posts.map( (item,index) => { 
                return (<li key={index}>  {item.student} : {item.time} </li>)
              })}
            </ul>
            
         </div>
        
      
    );
  }
}
export default App;  


