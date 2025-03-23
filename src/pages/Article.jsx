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
    backgroundImage:"radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
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

export default function Article(props) {
  const articles = [
    { title: "How to avoid bugs using modern C++", date: "Sep 16, 2016" },
    { title: "Learning Computer Programming Terminology", date: "Aug 25, 2016" },
    { title: "C++ class for generating Fibonacci series", date: "Aug 9, 2016" },
    { title: "C++ casting techniques", date: "May 15, 2016" },
    { title: "Safe Clearing of Private Data", date: "Apr 6, 2016" },
  ];

  const categories = [
    { name: "Algorithms", description: "C++ formulas for specific purposes" },
    { name: "C++ 11", description: "The new C++ standard" },
    { name: "Graphics and Multimedia", description: "OpenGL, DirectX" },
    { name: "How-To", description: "Step-by-step coding guides" },
    { name: "Standard Library", description: "C++ library references" },
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
        <br />

        <Container maxWidth="md">
          {/* Title Section */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
              C++ Standard Library Reference
            </Typography>
          </motion.div>

          {/* Latest Articles Section */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <Card
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": { boxShadow: 8 },
                p: 2,
                mb: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    backgroundColor: "#FF007F", // Pink background for section header
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  Latest Articles
                </Typography>
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        py: 2,
                        borderBottom: index !== articles.length - 1 ? "1px solid #ddd" : "none",
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        <Link
                          to="#"
                          style={{
                            color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#3498db"),
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {article.title}
                        </Link>
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {article.date}
                      </Typography>
                    </Grid>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Categories Section */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
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
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    backgroundColor: "#FF007F", // Pink background for section header
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  Categories
                </Typography>
                <Grid container spacing={2} mt={2}>
                  {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          sx={{
                            backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#333" : "#f4f4f4"),
                            borderRadius: "5px",
                            p: 2,
                            textAlign: "center",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.05)", boxShadow: 4 },
                          }}
                        >
                          <Typography variant="h6" sx={{ color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#2c3e50"), fontWeight: "bold" }}>
                            <Link
                              to="#"
                              style={{
                                color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#3498db"),
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" },
                              }}
                            >
                              {category.name}
                            </Link>
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                            {category.description}
                          </Typography>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Container>

        <Footer />
      </BackgroundColorContainer>
    </AppTheme>
  );
}
