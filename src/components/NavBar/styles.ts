import { Box, styled } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const StyledNavContainer = styled("div")(({}) => ({
  padding: ".5rem",
  borderRadius: "1rem",
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 99,
}));

export const StyledNavItems = styled(NavLink)(({ theme }) => ({
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "1.5rem",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const StyledIconContainer = styled("div")(({}) => ({
  backgroundColor: "#212529",
  padding: ".5rem .8rem",
  borderRadius: ".3rem",
}));
