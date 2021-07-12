import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import "./MainChatrooms.css";

const { TextArea } = Input;

let messages = [
  {
    chatUserID: 1,
    name: "Oliver West",
    messageTime: "9:30am",
    messageText: "What do you think about the BlockChain",
  },
  {
    chatUserID: 2,
    name: "Vitalik Buterin",
    messageTime: "9:35 am",
    messageText: "Well its pretty cool",
  },
  {
    chatUserID: 1,
    name: "Oliver West",
    messageTime: "9:40 am",
    messageText: "I know right",
  },
];

function MainChatrooms() {
  return (
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <ChatScreen />
    </Layout>
  );
}

class ChatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.messageText,
      userName: this.props.userName,
      messageTime: this.props.messageTime,
      color: this.props.color,
    };
  }

  render() {
    return (
      <div class="message-card" style={{ backgroundColor: this.state.color }}>
        <div class="message-card-time">{this.state.messageTime}</div>
        <div class="message-card-text">{this.state.text}</div>
        <div class="message-card-userName">{this.state.userName}</div>
      </div>
    );
  }
}
class ChatScreen extends React.Component {
  render() {
    return (
      <div class="chat-screen">
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatCard
          messageText="I love blockchain"
          userName="Olive West"
          messageTime="8:56 pm"
          color="#7A6263"
        />
        <ChatTextBox />;
      </div>
    );
  }
}

class ChatTextBox extends React.Component {
  state = {
    value: "",
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="chat-textbox">
        <TextArea
          onPressEnter={() => {
            messages.push({
              chatUserID: 1,
              name: "Oliver West",
              messageTime: "9:40 am",
              messageText: value,
            });
          }}
          className="text-area-texbox"
          placeholder="Type to chat"
          autoSize
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default MainChatrooms;
