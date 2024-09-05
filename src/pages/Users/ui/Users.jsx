import React, { useEffect, useState } from 'react';
import Header from 'layouts/Header';
import UserCard from 'components/userCard/userCard';
import './users.css';

const Users = () => {

  const [token, setToken] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const savedToken = getCookie("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("api/get_all_users_data", requestOptions)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err))
    }
  }, [token]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  return (
    <>
      <Header />
      <div className="users-container">
        {users.length > 0 ? users.map(current => <UserCard />) : null}
      </div>
    </>
  );
};

export default Users;
