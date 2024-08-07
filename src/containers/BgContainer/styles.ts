import { styled } from "@mui/material";

export const StyledBgContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "rgb(0,0,0)",
  color: "#ffffff",
  // padding: "2rem ",
  [theme.breakpoints.down("md")]: {
    padding: ".5rem",
  },
  opacity: ".9999",
}));

export const MovableContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "50px",
  top: "50px",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "white",
  bordeRadius: "50%",
  pointerEvents: "none",
  transition: "transform 0.1s ease-out",
  mixBlendMode: "difference",
  boxShadow: "0 0 20px 20px rgba(255, 255, 255, 0.2)",
  opacity: ".9",
  zIndex: "9999",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
