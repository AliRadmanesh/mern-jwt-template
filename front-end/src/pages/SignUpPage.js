import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  const onSignUpClicked = async () => alert("Sign up not implemented yet!");

  const onLogInClicked = () => history.push("/login");

  return (
    <div className="content-container">
      <h1>Sign Up</h1>
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
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="password"
      />
      <hr />
      <button
        disabled={!email || !password || password !== confirmPassword}
        onClick={onSignUpClicked}
      >
        Sign Up
      </button>
      <button onClick={onLogInClicked}>Already have an account? Log In!</button>
    </div>
  );
};
