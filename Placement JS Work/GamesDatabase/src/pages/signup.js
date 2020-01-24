import React from "react";
import Page from "../components/Page";

export default () => {
  const [fullName, setFullName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");

  const submitForm = () => {
    alert(fullName);
  };

  return (
    <Page>
      <div className="title">
        <h1>Sign Up</h1>
      </div>
      <body>
        <div className="data">
          <label>Full Name</label>
          <input type="text" id="fullName" value={fullName} onChange={e => { setFullName(e.target.value); }}/>
            <br></br>
          <label>Username</label>
          <input type="text" id="username" value={userName} onChange={e => { setUserName(e.target.value); }}/>
            <br></br>
          <label>Password</label>
          <input type="text" id="password" value={password} onChange={e => { setPassword(e.target.value); }}/>
            <br></br>
          <label>Confirm Password</label>
          <input type="text" id="confirmPassword" value={confirmPassword} onChange={password => { setConfirmPassword(password.target.value); }}/>
            <br></br>
          <label>Valid Email Address</label>
          <input type="text" id="email" value={emailAddress} onChange={e => { setEmailAddress(e.target.value); }}/>
            <br></br>
          <button className="confirmSignUp" onClick={submitForm}> Sign Up </button>
        </div>
      </body>
    </Page>
  );
};
