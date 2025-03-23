import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { styled } from "@mui/material/styles";
import AppTheme from "../shared-theme/AppTheme";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Styled component for the background container
const BackgroundColorContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: "no-repeat",
  ...theme.applyStyles("dark", {
    backgroundImage:
      "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
  }),
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 80%)",
    zIndex: -1,
  },
}));

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([]);
  const [references, setReferences] = useState([]);
  const [articles, setArticles] = useState([]);

  // Mock data for Tutorials, Reference, and Articles
  const mockData = {
    tutorials: [
      {
        id: 1,
        title: "Advanced C++ Tutorials",
        description:
          "Dive deeper into advanced C++ concepts like templates, STL, and multithreading. Perfect for experienced developers.",
      },
    ],
    references: [
      {
        id: 2,
        title: "C++ Standard Library Reference",
        description:
          "Comprehensive reference for the C++ Standard Library, including containers, algorithms, and utilities.",
      },
    ],
    articles: [
      {
        id: 3,
        title: "C++ Best Practices",
        description:
          "Explore best practices and design patterns for writing clean, efficient, and maintainable C++ code.",
      },
    ],
  };

  useEffect(() => {
    // Simulate fetching data
    setTutorials(mockData.tutorials);
    setReferences(mockData.references);
    setArticles(mockData.articles);
  }, []);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <BackgroundColorContainer>
        <NavBar />
        <br />
        <br />
        <br />
        <br />

        <Container maxWidth="lg">
          {/* Heading with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Advanced C++ Learning Hub
            </Typography>
          </motion.div>

          {/* Combined Cards Section */}
          <Grid container spacing={4} mt={2}>
            {/* Tutorial Card */}
            {tutorials.map((tutorial, index) => (
              <Grid item xs={12} sm={6} md={4} key={tutorial.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      minHeight: 400,
                      minWidth: 300,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {tutorial.title}
                      </Typography>
                      <center>
                        <video
                          height="120"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ pointerEvents: "none", borderRadius: "8px" }}
                        >
                          <source src="/videos/tutorial.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2 }}
                      >
                        {tutorial.description}
                      </Typography>
                      <br />
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark" ? "#444" : "#000",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          onClick={() =>
                            window.open(
                              "https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&index=1",
                              "_blank"
                            )
                          }
                        >
                          View Tutorial
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}

            {/* Reference Card */}
            {references.map((reference, index) => (
              <Grid item xs={12} sm={6} md={4} key={reference.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      minHeight: 400,
                      minWidth: 300,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {reference.title}
                      </Typography>
                      <center>
                        <video
                          height="120"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ pointerEvents: "none", borderRadius: "8px" }}
                        >
                          <source src="/videos/tutorial.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2 }}
                      >
                        {reference.description}
                      </Typography>
                      <br />
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark" ? "#444" : "#000",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          onClick={() =>
                            window.open(
                              "https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&index=1",
                              "_blank"
                            )
                          }
                        >
                          View Tutorial
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}

            {/* Articles Card */}
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      minHeight: 400,
                      minWidth: 300,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        {article.title}
                      </Typography>
                      <center>
                        <video
                          height="120"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ pointerEvents: "none", borderRadius: "8px" }}
                        >
                          <source src="/videos/tutorial.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2 }}
                      >
                        {article.description}
                      </Typography>
                      <br />
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark" ? "#444" : "#000",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          onClick={() =>
                            window.open(
                              "https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&index=1",
                              "_blank"
                            )
                          }
                        >
                          View Tutorial
                        </Button>
                      </motion.div>
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
      </BackgroundColorContainer>
      <Footer />
    </AppTheme>
  );
};

export default Tutorial;