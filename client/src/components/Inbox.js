import React, { Component } from 'react';
import '../styles/Inbox.css';
import jwt_decode from "jwt-decode";
import { Comment, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import InboxItem from './InboxItem';

class Inbox extends Component {

  constructor(props){
    super(props);

    this.state = {
      inboxList: []
    }
  }

  componentDidMount(){
    let token = localStorage.getItem("userToken");
    let user = jwt_decode(token);
    console.log(user.id);
    fetch('/api/chat/getInbox?user=' + user.id)
      .then(res => res.json())
      .then(chats => {
        // console.log(chats);
        console.log("Chats: ", chats);
        this.setState({inboxList: chats.chatPartners});
      })
      .then(() => {
        console.log("updating user names...");
        let chats = this.state.inboxList;
        chats.forEach((chat, index) => {
          fetch('/api/users/getUserById?id=' + chat.targetId)
            .then(res => res.json())
            .then(user => {
              console.log(user.name);
              chat.from = user.name;
            })
            .then(() => {
              console.log(chats);
              this.setState({inboxList: chats});
            });
        });
      });
  }

  render(){
    const list = [
    {
      from: 'Alec',
      latestMessage: '3Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },
    {
      from: 'Alec2',
      latestMessage: '2Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },
    {
      from: 'Alec3',
      latestMessage: '1Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },

    ];

    return (
      <div id='inbox'>
        <Comment.Group>
          <Header as='h3' dividing>Inbox</Header>
          {console.log(this.state.inboxList)}
          {this.state.inboxList ? this.state.inboxList.map((chat, index) => {
            return(
              <InboxItem
                key={index}
                targetId={chat.targetId}
                from={chat.from}
                latestMessage={chat.latestMessage}
                createdAt={chat.createdAt}
              />
            );
          }) : null}



        </Comment.Group>
      </div>
    );
  }
}

export default Inbox;
