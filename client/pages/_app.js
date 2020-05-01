import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import theme from "../components/theme";
import Typography from "@material-ui/core/Typography";
import SignIn from "../components/user/SignIn.component";
import { auth } from "../src/firebase.utils";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import UserContext from "../src/context/userContext.context";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Popover from "@material-ui/core/Popover";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Get Out, Austin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <AppBar position='sticky'> */}
        <UserContext.Provider value={{ userGlobal: user }}>
          <Toolbar color="primary">
            <Link href="/">
              <div style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit" noWrap>
                  Get Out, Austin
                </Typography>
              </div>
            </Link>
            <Hidden smUp implementation="css">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "16px",
                  display: "flex",
                  flexDirection: "row",
                }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 56, left: 525 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                style={{ width: "100vw", margin: "0" }}
              >
                <SignIn currentUser={user}></SignIn>
              </Popover>
            </Hidden>
            <Hidden xsDown implementation="css">
              <SignIn currentUser={user}></SignIn>
            </Hidden>
          </Toolbar>
        </UserContext.Provider>
        {/* </AppBar> */}
        <UserContext.Provider value={{ userGlobal: user }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
