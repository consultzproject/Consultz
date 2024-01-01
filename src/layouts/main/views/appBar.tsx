import React from "react";
import * as Router from "react-router-dom";
import * as Mui from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const AppBar = () => {
  const Pages = [
    {
      name: "Home",
      path: "/home",
    },

    {
      name: "About Us",
      path: "/aboutus",
    },

    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "News",
      path: "/news",
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
  const [headerColor, setHeaderColor] = React.useState("grey !important");

  const listenScrollEvent = () => {
    window.scrollY > 6
      ? setHeaderColor("black !important")
      : setHeaderColor("grey !important");
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
      }}
    >
      <Mui.Container maxWidth="xl">
        <Mui.Toolbar disableGutters>
          {/* laptop */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Mui.Typography
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Consultz.
          </Mui.Typography>
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
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    background: PathUrl.includes(page.path) ? "green" : "",
                  }}
                >
                  {page.name}
                </Mui.Button>
              ))}
            </Mui.Box>
            <Mui.Stack direction="row" alignItems="center" spacing={2}>
              <Mui.Button
                variant="contained"
                sx={{
                  background: "#00aa6c",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
              >
                Let's Talk
              </Mui.Button>
              <InstagramIcon />
              <FacebookIcon />
              <LinkedInIcon />
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
          >
            LOGOmobile
          </Mui.Typography>
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
                  <Mui.Typography textAlign="center">
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
