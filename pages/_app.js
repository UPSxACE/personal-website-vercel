import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
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
        }, 500);
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
      setLoading(false);
    }, 500);
  }, []);
  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner" />
      </div>
    )
  );
  //routeChangeStart
  //routeChangeComplete
  //routeChangeError
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
