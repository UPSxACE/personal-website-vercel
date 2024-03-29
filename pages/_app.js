import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence, motion } from "framer-motion";
import loadingIcon from "../img/atoms-lottie-animation-200x200-black.gif";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/system";
import { $color1, $color2, $color3 } from "../utils/config";
import { ThemeContext } from "styled-components";

function checkThemeCookie() {
  if (typeof window !== "undefined") {
    let theme = localStorage.getItem("theme");
    if (theme && theme <= 2 && theme >= 0) {
      return Number(theme);
    }
    localStorage.setItem("theme", 0);
    return 0;
  } else {
    return 0;
  }
}

function Loading(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url) => {
      url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 1500);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      props.setLoaded(true);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="spinner-wrapper"
          transition={{ default: { duration: 0.65 } }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 999 }}
        >
          <Image alt="loader icon" src={loadingIcon} />
        </motion.div>
      )}
    </AnimatePresence>
  );
  //routeChangeStart
  //routeChangeComplete
  //routeChangeError
}

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState(checkThemeCookie());

  let theme = createTheme({
    palette: {
      primary: {
        main: $color2[mode],
      },
    },
  });

  theme = createTheme(theme, {
    components: {
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            // ap
            backgroundColor: $color3[mode],
            height: 4,
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <ThemeProvider theme={theme}>
          <Loading setLoaded={setLoaded} />
          <Component key={loaded} {...pageProps} setMode={setMode} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
