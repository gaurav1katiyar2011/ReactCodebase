import React, { Component } from 'react';
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import Message from './Message'

class App extends Component {
  render() {
    return (
      <div>
          <CommentBox/>
          <CommentList/>     
          
      </div>
      );
  }
}

export default App;
