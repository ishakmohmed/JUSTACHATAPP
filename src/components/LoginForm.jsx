import React, { useState } from "react";
import axios from "axios";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "85e23865-7e8f-431d-a465-a7ce568a5d85",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload(); 
    } catch (error) {
      setError("Wrong id/password. Try again.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">JUSTACHATAPP!</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "#D81E5B",
              color: "white",
              padding: "10px",
              width: "80%",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h5>
              Available usernames: mohmedishak (recommended) or elonmusk or emmaroberts or
              oprahwinfrey or misterrecruiter
            </h5>
            <h5>Password for all accounts: password0</h5>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username (see pink card above)"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password (see pink card above)"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Let's roll</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
