import React from "react";
import Page from "../components/Page";

export default () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitForm = () => {
    alert(userName);
  };

  return (
    <Page>
      <div className="title">
        <h1>Login</h1>
      </div>
      <body>
        <div className="data">
          <label>Username</label>
          <input type="text" id="username" value={userName} onChange={e => { setUserName(e.target.value); }}/>
            <br></br>
          <label>Password</label>
          <input type="text" id="password" value={password} onChange={e => { setPassword(e.target.value); }}/>
            <br></br>
          <button classNane="logInButton">Login</button>
        </div>
      </body>
    </Page>
  );
};
