import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import AppTheme from '../shared-theme/AppTheme';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
  <NavBar/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <br></br><br></br>
         <Typography variant="h5" color="textSecondary">
          Oops! The page you are looking for does not exist.
        </Typography>
        {/* Video Section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '50%',
            maxWidth: '250px', // Adjust the max width as needed
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px', // Add spacing below the video
          }}
        >
          <source src="/videos/404_error.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 404 Text */}
       
       

        {/* Go to Home Button */}
        <Button variant="contained" color="primary" onClick={() => navigate('/sign-in')}>
          Go to Home
        </Button>
      </Box>
      <Footer />
    </AppTheme>
  );
}