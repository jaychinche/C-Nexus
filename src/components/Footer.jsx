import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SitemarkIcon } from '../components/CustomIcons';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'© 2025 cplusplus.com. All rights reserved.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            <SitemarkIcon />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Learn the versatile and powerful C++ programming language. Includes detailed explanations of pointers, functions, classes, templates, and more. Explore the Standard Library, contribute articles, and engage in the latest forum discussions.
          </Typography>
          <InputLabel htmlFor="email-newsletter">Subscribe to our newsletter</InputLabel>
          <Stack direction="row" spacing={1} useFlexGap>
            <TextField
              id="email-newsletter"
              hiddenLabel
              size="small"
              variant="outlined"
              fullWidth
              placeholder="Your email address"
              sx={{ width: '250px' }}
            />
            <Button variant="contained" color="primary" size="small">
              Subscribe
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Quick Links</Typography>
          <Link color="text.secondary" variant="body2" href="/tutorial">Tutorials</Link>
          <Link color="text.secondary" variant="body2" href="/reference">Reference</Link>
          <Link color="text.secondary" variant="body2" href="/article">Articles</Link>
          <Link color="text.secondary" variant="body2" href="/forum">Forum</Link>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Contact</Link>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>Support & Resources</Typography>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">FAQs</Link>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Help Center</Link>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Blog</Link>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Privacy Policy</Link>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Terms of Service</Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Privacy Policy</Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>&nbsp;•&nbsp;</Typography>
          <Link color="text.secondary" variant="body2" href="/dashboard-main">Terms of Service</Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton color="inherit" size="small" href="dashboard-main" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" size="small" href="dashboard-main" aria-label="X">
            <XIcon />
          </IconButton>
          <IconButton color="inherit" size="small" href="/dashboard-main" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" size="small" href="dashboard-main" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}