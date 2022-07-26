import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useToken } from "../auth/useToken";

export const LogInPage = () => {
  const [token, setToken] = useToken();

  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const onLogInClicked = async () => {
    const response = await axios.post("/api/login", { email, password });
    const { token } = response.data;
    setToken(token);
    history.push("/");
  };

  const onForgotPasswordClicked = () => history.push("/forgot-password");

  const onSignupClicked = () => history.push("/signup");

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="someone@gmail.com"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      />
      <hr />
      <button disabled={!email || !password} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={onForgotPasswordClicked}>Forgot your password?</button>
      <button onClick={onSignupClicked}>Don't have an account? Sign Up!</button>
    </div>
  );
};
