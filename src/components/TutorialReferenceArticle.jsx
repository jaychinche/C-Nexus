import React, { useState, useEffect } from "react";
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
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

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

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([]);
  const [references, setReferences] = useState([]);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const handleRedirectTutorials = () => {
    navigate("/tutorial"); // Replace with the actual route you want to navigate to
  };

  // Mock data for Tutorials, Reference, and Articles
  const mockData = {
    tutorials: [
      {
        id: 1,
        title: "Tutorials",
        description:
          "C++ Language: Learn this versatile and powerful programming language. Includes detailed explanations of pointers, functions, classes and templates, among others...",
      },
    ],
    references: [
      {
        id: 2,
        title: "Reference",
        description:
          "Description of the most important classes, functions and objects of the Standard Language Library, with descriptive fully-functional short programs as examples. Browse the C++ Reference.",
      },
    ],
    articles: [
      {
        id: 3,
        title: "Articles",
        description:
          "User-contributed articles, organized into different categories. You can contribute your own articles! Browse Articles.",
      },
    ],
  };

  useEffect(() => {
    // Simulate fetching data
    setTutorials(mockData.tutorials);
    setReferences(mockData.references);
    setArticles(mockData.articles);
  }, []);

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
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
            >
              C++ Learning Hub
            </Typography>
          </motion.div>

          {/* Combined Cards Section */}
          <Grid container spacing={4} mt={2}>
            {/* Tutorial Card */}
            {tutorials.map((tutorial, index) => (
              <Grid item xs={12} sm={6} md={4} key={tutorial.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) => theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Tutorial Title */}
                      <Typography variant="h6" gutterBottom>
                        {tutorial.title}
                      </Typography>

                      {/* Video Section */}
                      <center>
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "200px", // Reduced video size
                            height: "auto",
                            borderRadius: "8px",
                            pointerEvents: "none",
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/videos/tutorial.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>

                      {/* Tutorial Description */}
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {tutorial.description}
                      </Typography>
                      <br />

                      {/* View Tutorial Button */}
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#444" : "#000"),
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          href="/tutorial"
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) => theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Reference Title */}
                      <Typography variant="h6" gutterBottom>
                        {reference.title}
                      </Typography>

                      {/* Video Section */}
                      <center>
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "200px", // Reduced video size
                            height: "auto",
                            borderRadius: "8px",
                            pointerEvents: "none",
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/videos/refernces.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>

                      {/* Reference Description */}
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {reference.description}
                      </Typography>

                      {/* View Reference Button */}
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#444" : "#000"),
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          href="/reference"
                        >
                          View Reference
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      backgroundColor: (theme) => theme.palette.background.paper,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6 },
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Article Title */}
                      <Typography variant="h6" gutterBottom>
                        {article.title}
                      </Typography>

                      {/* Video Section */}
                      <center>
                        <video
                          style={{
                            width: "100%",
                            maxWidth: "200px", // Reduced video size
                            height: "auto",
                            borderRadius: "8px",
                            pointerEvents: "none",
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src="/videos/articles.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </center>

                      {/* Article Description */}
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {article.description}
                      </Typography>

                      {/* View Article Button */}
                      <br></br><br></br>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          sx={{
                            backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#444" : "#000"),
                            color: "#fff",
                            "&:hover": { backgroundColor: "#FF1493" },
                            mt: 2,
                          }}
                          href="/article"
                        >
                          View Article
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
    </AppTheme>
  );
};

export default Tutorial;