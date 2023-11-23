import React, { useState } from "react";
import { database } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [login, setLogin] = useState();
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
      setLogin(true);
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <h1>{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "singin" : "signup")}>
          <input name="email" type="email" placeholder="Email" />
          <br />
          <input name="password" type="password" placeholder="Password" />
          <br />
          <button>{login ? "SignIn" : "SignUp"}</button>
        </form>
        <div className="active-btns">
          <button
            className={login == false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </button>
          <button
            className={login == true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
