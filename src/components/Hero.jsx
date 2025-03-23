import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BackgroundColorContainer = styled('div')(({ theme }) => ({
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  backgroundImage: "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
  '&::before': {
    content: "''",
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 80%)',
    zIndex: -1,
  },
}));

export default function HeroCommon() {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  // Track scroll progress
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Move elements up as user scrolls
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fade out elements as user scrolls

  return (
    <BackgroundColorContainer>
      <Box sx={{ width: '100%', backgroundRepeat: 'no-repeat' }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pt: { xs: 20, sm: 30, md: 0 }, 
            pb: { xs: 8, sm: 12 },
          }}
        >
          <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Stack spacing={3} sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}>
              <Typography
                variant="h1"
                component={motion.h1}
                layout
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                sx={{
                  fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                <br />
                <span style={{ color: isLightTheme ? 'black' : 'white' }}>C++</span>
                <span style={{ color: '#4A90E2' }}> Learning Hub</span>
              </Typography>

              <Typography
                component={motion.p}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                sx={{ color: 'text.secondary', width: { sm: '100%', md: '80%' } }}
              >
                Learn the versatile and powerful C++ programming language. Includes detailed explanations of pointers, functions, classes, templates, and more. Explore the Standard Library, contribute articles, and engage in the latest forum discussions.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 2 }}
                component={motion.div}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                <Link to="/tutorial" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" size="large">
                    Explore Tutorials
                  </Button>
                </Link>
                <Link to="/forum" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="primary" size="large">
                    Join the Forum
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity,
            y,
          }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isLightTheme ? '#000' : '#fff'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </Box>
    </BackgroundColorContainer>
  );
}
