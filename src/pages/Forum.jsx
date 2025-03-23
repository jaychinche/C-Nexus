
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

// Styled component for the background container
const BackgroundColorContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
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

export default function Forum(props) {
  const forums = [
    {
      title: "Beginners",
      description: "Discussions about C++ programming for beginners",
      lastTopic: "Getter for enum member returns a copy of enum?",
      lastActive: "Mar 19, 2025 at 8:02am by TheIdeasMan",
    },
    {
      title: "Windows Programming",
      description: "Win32, MFC, ATL, C++/CLI, .NET ...",
      lastTopic: "Formatted Console Log with Datetime",
      lastActive: "Mar 12, 2025 at 9:29pm by seeplus",
    },
    {
      title: "UNIX/Linux Programming",
      description: "Programming C++ for UNIX and Linux",
      lastTopic: "tzdb: cannot locate zone",
      lastActive: "Mar 3, 2025 at 2:07am by spistol",
    },
    {
      title: "General C++ Programming",
      description: "Anything about programming in C++",
      lastTopic: "Use C++ 20 with Embarcadero",
      lastActive: "Mar 18, 2025 at 9:06am by salem c",
    },
    {
      title: "Lounge",
      description: "Discussions about this website, or other topics not related to C++ programming",
      lastTopic: "I wrote a cron job!",
      lastActive: "Mar 15, 2025 at 11:32pm by jonnin",
    },
    {
      title: "Jobs",
      description: "Job offers for C++ programmers.",
      lastTopic: "Jobs",
      lastActive: "Apr 18, 2024 at 8:09pm by deleted account xyzzy",
    },
    {
      title: "Articles",
      description: "How-to's and other technical articles",
      lastTopic: "How to Make a Game 2",
      lastActive: "Jul 29, 2011 at 12:21pm by anonymous23323124",
    },
  ];

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <BackgroundColorContainer>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Container maxWidth="md">
          {/* Title Section */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              C++ Forums
            </Typography>
          </motion.div>

          {/* Forums Section */}
          <Grid container spacing={4} mt={2}>
            {forums.map((forum, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) => theme.palette.background.paper,
                      borderRadius: 3,
                      boxShadow: 4,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 8 },
                      p: 2,
                    }}
                  >
                    <CardContent sx={{ textAlign: "left", p: 3 }}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                          backgroundColor: "#FF007F", // Pink background for section header
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        {forum.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", mt: 2 }}>
                        {forum.description}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, fontStyle: "italic" }}>
                        Last active topic:{" "}
                        <Link
                          to="#"
                          style={{
                            color: (theme) => (theme.palette.mode === "dark" ? "#90caf9" : "#3498db"),
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {forum.lastTopic}
                        </Link>
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1, fontStyle: "italic" }}>
                        {forum.lastActive}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </BackgroundColorContainer>
      <Footer />
    </AppTheme>
  );
}