import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src="./msg.png" alt="Logo" />
          <div className="login__text">
            <h1>Sign in to Messagely</h1>
          </div>
          <Button onClick={login}>sign in with google</Button>
        </div>
      </div>
    </div>
  );
}
