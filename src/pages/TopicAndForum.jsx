import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Glassmorphic Styled Card
const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "450px",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
  },
}));

// Styled Background Container
const BackgroundColorCountainer= styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundImage: "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage: "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 80%)",
    zIndex: -1,
  },
}));

export default function TopicAndForum(props) {
  const topics = [
    {
      title: "Introduction to C++",
      description: "Learn the basics of C++ programming.",
      link: "https://www.cplusplus.com/",
    },
    {
      title: "C++ Advanced Topics",
      description: "Explore advanced concepts like STL, OOP, and more.",
      link: "https://www.learncpp.com/",
    },
  ];

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar/>

      <BackgroundColorCountainer>
        <Container maxWidth="md">
        

          
        </Container>
      </BackgroundColorCountainer>
      <Footer />
    </AppTheme>
  );
}
