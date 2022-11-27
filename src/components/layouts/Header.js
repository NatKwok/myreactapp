import "../Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "../HomeButton";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

function Header() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <HomeButton />
      </div>
      <div style={{ textAlign: "center" }}>

      <ButtonGroup variant="text" aria-label="text primary button group">
        <Button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/"
          >
            {" "}
            Home
          </NavLink>
        </Button>

        <Button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/about"
          >
            {" "}
            About
          </NavLink>
        </Button>

        <Button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/content"
          >
            {" "}
            Content
          </NavLink>
        </Button>

        <Button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/contact"
          >
            {" "}
            Contact
          </NavLink>
        </Button>

        <Button>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
            to="/details"
          >
            {" "}
            Details
          </NavLink>
        </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Header;
