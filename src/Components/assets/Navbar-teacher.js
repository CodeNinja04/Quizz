import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Modal,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useGoogleAuth } from "../googleAuth";

import { Link } from "react-router-dom";

 const MenuExampleInvertedSegment = () => {
  
  const [activeItem,setActiveitem]=useState("home");
  
  const handleItemClick = (e, { name }) => setActiveitem({ activeItem: name });

   const { signOut } = useGoogleAuth();

    return (
      <Menu
        secondary
        attached="top"
        fluid
        stackable
        style={{ backgroundColor: "purple" }}
        size="massive"
      >
        <Menu.Item
          style={{ color: "white" }}
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/teacher"
        />

        <Menu.Item
          style={{ color: "white" }}
          name="Profile"
          active={activeItem === "profile"}
          onClick={handleItemClick}
          as={Link}
          to="teacher-profile"
        />

        <Menu.Item
          style={{ color: "white" }}
          color="purple"
          position="right"
          name="LOGOUT"
          active={activeItem === "logout"}
          onClick={signOut}
        />
      </Menu>
    );
  
}

export default MenuExampleInvertedSegment;