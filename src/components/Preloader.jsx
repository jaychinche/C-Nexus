import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom"; // For navigation
import AppTheme from "../shared-theme/AppTheme";

// Styled component for the background container
const BackgroundColorContainer = styled("div")(({ theme }) => ({
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

const Preloader = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Simulate loading delay and navigate to the dashboard
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard-main"); // Navigate to the dashboard after 3 seconds
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <BackgroundColorContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Animated SVG */}
          <svg
            viewBox="0 0 100 100"
            style={{ height: "150px", width: "150px" }}
          >
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
            >
              {/* Left Line */}
              <path d="M 21 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 21 59; 180 21 59"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Right Line */}
              <path d="M 79 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 79 59; -180 79 59"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Top Line */}
              <path d="M 50 21 V 40">
                <animate
                  attributeName="d"
                  values="M 50 21 V 40; M 50 59 V 40"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Bottom Line */}
              <path d="M 50 60 V 79">
                <animate
                  attributeName="d"
                  values="M 50 60 V 79; M 50 98 V 79"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Top Box */}
              <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(255,255,255,1); rgba(100,100,100,0)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Middle Box */}
              <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
              {/* Bottom Box */}
              <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(100,100,100,0); rgba(255,255,255,1)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0; 0 -19"
                dur="2s"
                repeatCount="indefinite"
              />
            </g>
          </svg>

          {/* Project Name */}
          <h1 style={{ color: "#fff", marginTop: "20px", fontSize: "2rem", fontWeight: "bold" }}>
            C++ Nexus
          </h1>

          {/* Loading Text */}
          <p style={{ color: "#fff", marginTop: "10px", fontSize: "1.2rem" }}>
            Loading...
          </p>
        </div>
      </BackgroundColorContainer>
    </AppTheme>
  );
};

export default Preloader;