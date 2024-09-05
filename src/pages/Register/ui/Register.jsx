import React, { useState , useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "entities/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [token, setToken] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (token){

      const userHeaders = { Authorization: `Bearer ${token}`}; 

      const userRequestOptions = {
        method: "GET",
        headers: userHeaders, 
        redirect: "follow", 
      };

      fetch("api/get_user_data", userRequestOptions) 
        .then((resp) => resp.json()) 
        .then((res) => {
          dispatch(setCurrentUser(res))
          navigate('/users')
        }) 
        .catch((error) => console.error(error));
    }
  }, [token, navigate]);

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
        console.log('signed in . + result')
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
