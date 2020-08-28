import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  if (user) {
    return (
      <div>
        <h2>Profile</h2>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  }
  return <div>User Profile is blank</div>
};

export default Profile;