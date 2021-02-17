import React from "react";

function MyMessage({ message }) {
  // if condition in if statement is true, that means the message is not a text, but ATTACHMENT like an image, so we need to handle this differently, otherwise just render the text as implemented below.
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#D63230",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;
