import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Divider,
  MenuItem,
  Drawer,
  Alert,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CloseIcon from "@mui/icons-material/Close";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [alertMessage, setAlertMessage] = React.useState(null);
  const [alertType, setAlertType] = React.useState("success");

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser({ isLoggedIn: true, userType: decodedToken.userType, userid: decodedToken.userid });
      } catch (error) {
        console.error("Invalid token:", error);
        setAlertMessage("Invalid session. Please log in again.");
        setAlertType("error");
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
    }
  }, []);

  const handleMonitor = () => {
    if (!user?.userid) {
      setAlertMessage("User ID not found. Please log in.");
      setAlertType("error");
      return;
    }
    navigate(`/indiv-detail/${user.userid}`);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setAlertMessage("Successfully logged out.");
    setAlertType("success");
    navigate("/sign-in");
  };

  return (
  
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none" }}>
        <br></br>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}>
            <Link to="/dashboard-main" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <SitemarkIcon />
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
             
              <Button component={Link} to="/tutorial" variant="text" color="info" size="small">
              Tutorials
              </Button>
              <Button component={Link} to="/reference" variant="text" color="info" size="small">
               References
              </Button>
              <Button component={Link} to="/article" variant="text" color="info" size="small">
              Articles
              </Button>
              <Button component={Link} to="/forum" variant="text" color="info" size="small">
               Forum
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {user?.isLoggedIn ? (
              <Button variant="contained" size="small" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button component={Link} to="/sign-in" color="primary" variant="contained" size="small">
                Login
              </Button>
            )}
            <ColorModeIconDropdown />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Button component={Link} to="/tutorial" variant="text" color="info" size="small">
                Tutorials
                </Button>
                <Button component={Link} to="/reference" variant="text" color="info" size="small">
                References
                </Button>
                <Button component={Link} to="/article" variant="text" color="info" size="small">
                Articles
                </Button>
                <Button component={Link} to="/forum" variant="text" color="info" size="small">
                Forum
                </Button>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  {user?.isLoggedIn ? (
                    <Button color="error" variant="contained" fullWidth onClick={handleLogout}>
                      Logout
                    </Button>
                  ) : (
                    <Button component={Link} to="/sign-in" color="primary" variant="contained" fullWidth>
                      Login
                    </Button>
                  )}
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>

      {alertMessage && (
        <Box sx={{ width: "50%", maxWidth: 600, mx: "auto", mb: 2 }}>
          <Alert
            variant="filled"
            severity={alertType}
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={() => setAlertMessage(null)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            {alertMessage}
          </Alert>
        </Box>
      )}
    </AppBar>
  );
}
