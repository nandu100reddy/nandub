import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import Post from "./common/Post";
import "./_Chat.scss";

const Chat = (props) => {
  const { activeApplication, currentObject } = props;
  return (
    <>

      <div className="chat">
        <Container fluid className="pt-3">
          {currentObject.label == "Chat" ?
            <Tabs defaultActiveKey="post" id="chat-tab">
              <Tab eventKey="post" title="Post">
                <Post />
              </Tab>
              <Tab eventKey="poll" title="Poll" disabled>
                Poll
          </Tab>
              <Tab eventKey="question" title="Question" disabled>
                Question
          </Tab>
            </Tabs> : <h1>{currentObject.label}</h1>
          }
        </Container>
      </div>


    </>
  );
};

export default Chat;
