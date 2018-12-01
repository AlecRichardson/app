import React, { Component } from 'react';
import { List, Card, Comment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class InboxItem extends Component {

  render(){
    let date = new Date(this.props.createdAt*10);
    console.log(new Date());
    let formattedDate = date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    console.log("Date: ", formattedDate);
    return(
      <Link to={'/chat/' + this.props.targetId}>
        <Comment>
          <Comment.Avatar src='./avatar.png'/>
          <Comment.Content>
            <Comment.Author as='a'>{this.props.from}</Comment.Author>
            <Comment.Metadata>{formattedDate}</Comment.Metadata>
            <Comment.Text>{this.props.latestMessage}</Comment.Text>
          </Comment.Content>
        </Comment>
      </Link>
    );
  }
}

export default InboxItem;
