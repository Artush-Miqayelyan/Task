import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./register.css";

const Register = () => {
  const [token, setToken] = useState(null);
  const handleSuccess = async (credentialResponse) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      credential: credentialResponse,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("api/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        document.cookie = `token=${result.access_token}; path=/;`;
        setToken(result.access_token);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleSuccess(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Register;
