import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        {hasHiddenAuthButtons ?(
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>{
            
            history.push("/");
          }}
        >
          Back to explore
        </Button>
        ):localStorage.getItem("token")!==null ? (
          <Stack direction="row" spacing={2}>
            <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
            <div className="username-text">{localStorage.getItem("username")}</div>
            <Button onClick={()=>{
            localStorage.clear();
          history.push("/");
        window.location.reload();}} >
          Logout
        </Button>
          </Stack>
        ):(
          <div>
            <Button onClick={()=>{
            
          history.push("/login");
        }} >
          Login
        </Button>
            <Button 
            variant="contained"
            onClick={()=>{
            
          history.push("/register");
        }} >
          Register
        </Button>
        </div>
        
        )}
      </Box>
    );
};

export default Header;
