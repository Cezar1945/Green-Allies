import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ProtectedRoute from '../components/ProtectedRoute';
import { UserAuthContextProvider } from "../context/UserAuthContext";


function LoginP() {
  return (
    <div>
    <Header />
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default LoginP;
