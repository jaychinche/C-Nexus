import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

export default function Reference(props) {
  const categories = [
    {
      title: "C Library",
      items: ["assert.h", "ctype.h", "errno.h", "math.h", "stdio.h", "stdlib.h"],
    },
    {
      title: "Containers",
      items: ["array", "vector", "list", "map", "set", "queue"],
    },
    {
      title: "Input/Output Stream Library",
      items: ["iostream", "fstream", "sstream"],
    },
    {
      title: "Threading & Atomic Library",
      items: ["atomic", "mutex", "thread"],
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
              C++ Standard Library Reference
            </Typography>
          </motion.div>

          {/* Categories Section */}
          <Grid container spacing={4} mt={2}>
            {categories.map((category, index) => (
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
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
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
                        {category.title}
                      </Typography>
                      <Grid container spacing={2} mt={2}>
                        {category.items.map((item, idx) => (
                          <Grid item xs={12} sm={6} md={4} key={idx}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                  backgroundColor: (theme) =>
                                    theme.palette.mode === "dark" ? "#444" : "#ddd",
                                  color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "white"),
                                  "&:hover": { backgroundColor: (theme) =>
                                    theme.palette.mode === "dark" ? "#FF007F" : "#FF007F" },
                                  borderRadius: "5px",
                                  padding: "10px",
                                }}
                                component={Link}
                                to="#"
                              >
                                {item}
                              </Button>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
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
