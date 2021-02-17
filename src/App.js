import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App(props) {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="85e23865-7e8f-431d-a465-a7ce568a5d85"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
