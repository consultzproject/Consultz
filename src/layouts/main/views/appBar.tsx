import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "src/assets/Logo.png";

export const AppBar = () => {
  const Pages = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Testimonials",
      path: "/testimonials",
    },

    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Submit Your Profile",
      path: "/submitprofile",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const Navigate = Router.useNavigate();
  const PathUrl = window.location.pathname;
  console.log(PathUrl, "path");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [headerColor, setHeaderColor] = React.useState(
    "transparent !important"
  );

  const listenScrollEvent = () => {
    window.scrollY > 6
      ? setHeaderColor("white !important")
      : setHeaderColor("transparent !important");
  };
  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <Mui.AppBar
      sx={{
        backgroundColor: headerColor,
        borderBottom: "1px solid grey",
        // backdropFilter: "blur(5px)",
      }}
    >
      <Mui.Container maxWidth="xl">
        <Mui.Toolbar disableGutters>
          {/* laptop */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {/* 
          <Mui.Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
              color: "black",
            }}
          >
            Consultz.
          </Mui.Typography> */}
          <Mui.Stack>
            <img src={Logo} style={{ width: "100px", height: "100px" }} />
          </Mui.Stack>
          <Mui.Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            width="100%"
          >
            <Mui.Box sx={{ display: { xs: "none", md: "flex" } }}>
              {Pages.map((page, index): any => (
                <Mui.Button
                  key={index}
                  onClick={() => Navigate(page.path)}
                  sx={{
                    my: 2,
                    color: window.scrollY > 6 ? "black" : "white",
                    display: "block",
                    textTransform: "capitalize",
                    background: PathUrl.includes(page.path) ? "green" : "",
                    fontFamily: "urbanist",
                    fontWeight: 600,
                    fontSize: "18px",
                    padding: "0 15px",
                  }}
                >
                  {page.name}
                </Mui.Button>
              ))}
            </Mui.Box>
            <Mui.Stack direction="row" alignItems="center" spacing={2}>
              <InstagramIcon
                sx={{
                  color: window.scrollY > 6 ? "black" : "white",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/seyal.eu?igshid=ZGUzMzM3NWJiOQ%3D%3D"
                  )
                }
              />
              <FacebookIcon
                sx={{
                  color: window.scrollY > 6 ? "black" : "white",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Seyal.eu?mibextid=ZbWKwL"
                  )
                }
              />
              <LinkedInIcon
                sx={{
                  color: window.scrollY > 6 ? "black" : "white",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://www.linkedin.com/company/seyal.eu/")
                }
              />
            </Mui.Stack>
          </Mui.Stack>

          {/* mobile */}
          <Mui.Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Mui.Typography>
          <Mui.Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Mui.Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Pages.map((page, index) => (
                <Mui.MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Mui.Typography
                    textAlign="center"
                    onClick={() => Navigate(page.path)}
                  >
                    {page.name}
                  </Mui.Typography>
                </Mui.MenuItem>
              ))}
            </Mui.Menu>
          </Mui.Box>
        </Mui.Toolbar>
      </Mui.Container>
    </Mui.AppBar>
  );
};
