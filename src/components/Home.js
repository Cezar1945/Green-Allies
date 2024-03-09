import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
    console.log("User in Home:", user);
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        {user ? (
          <>
            <p>Welcome</p>
            <p>{user.email}</p>
          </>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      
    </>
  );
};


export default Home;