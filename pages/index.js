import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled, { ThemeContext } from "styled-components";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useForceUpdate,
} from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import useMeasure from "react-use-measure";
import {
  $backgroundColor,
  $color0,
  $color1,
  $color2,
  $color2Alt,
  $color6,
  $margin1,
  $padding1,
  $profilePicture,
  $textColor0,
  $textColor1,
  $textColor1Alt,
} from "../utils/config";
import { useContext, useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { TypedSpanDiv } from "../components/text";
import { Main } from "../components/main";
import { Button1, Button2 } from "../components/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { HamburguerMenuIcon } from "../components/hamburguer";
import { PageTransition } from "@steveeeie/react-page-transition";
import { Section } from "../components/home/section";
import { ProfilePicture } from "../components/home/profilePicture";
import { IconSpanDiv } from "../components/home/iconSpanDiv";
import {
  faHouseChimney,
  faCalendar,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { pages } from "../utils/pages";

export default function Home(props) {
  const [phoneMenu, setPhoneMenu] = useState(false);
  const [frontPage, setFrontPage] = useState(true);

  const [tab, setTab] = useState(0);

  const [spin, setSpin] = useState(false);

  const mode = useContext(ThemeContext);

  useEffect(() => {
    console.log("tab: " + tab);
  }, [tab]);

  let delayTimer = 0;

  function getAnimation() {
    return "foldTopFromBottom";
  }

  let state = useRef();

  function setCheckbox(value) {
    state.current.checked = value;
  }

  function togglePhoneMenu(value) {
    if (value === true || value === false) {
      setPhoneMenu(value);
    } else {
      setPhoneMenu(!phoneMenu);
    }
  }

  function toggleFrontPage(value) {
    setFrontPage(value);
  }

  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "",
        "",
        "Hi",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>EDUARDO BOTELHO</em>",
        "I'm <em>DEVELOPER</em>",
        "I'm <em>DEVELOPER</em>",
      ],
      typeSpeed: 35,
      backSpeed: 27,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={spin ? "index changingTheme" : "index"}>
      <Head>
        <title>Eduardo Botelho</title>
        <meta
          name="description"
          content="Personal porfolio, created using the awesome technology of Next.js and Vercel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main mode={mode}>
        <AnimatePresence>
          {phoneMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={"darkOverlay"}
            />
          )}
        </AnimatePresence>

        <MainContainer as={motion.div} className="g-0" fluid>
          <Row className="g-0 h-100">
            <Col
              className="phoneNav
             align-items-center"
              xs={12}
            >
              <h3 className="m-0 textColor0">Eduardo</h3>
              <HamburguerMenuIcon
                checkboxRef={state}
                onClick={togglePhoneMenu}
              />
            </Col>
            <ResizableContainerHalfCol
              xs={12}
              lg={6}
              className={
                "g-0 left d-flex justify-content-center align-items-center flex-column"
              }
              style={{ zIndex: 90 }}
              frontPage={frontPage}
              side={"left"}
            >
              <TypedSpanDiv mode={mode} className="mb-2">
                <span id="typed" className="textColor2Alt"></span>
              </TypedSpanDiv>
              <ButtonPairWrapper className="d-flex justify-content-center mt-4 flex-wrap">
                <Button1 className="p-2 ps-3 pe-3">Download CV</Button1>
                <Button2
                  mode={mode}
                  className="p-2 ps-3 pe-3"
                  onClick={() => {
                    if (!spin) {
                      clearTimeout(delayTimer);
                      toggleFrontPage(false);
                      togglePhoneMenu(false);
                      setCheckbox(false);
                      setTab(7);
                    }
                  }}
                >
                  Contact Me
                </Button2>
              </ButtonPairWrapper>
            </ResizableContainerHalfCol>

            <ResizableContainerHalfCol
              lg={6}
              className={
                "d-none g-0 right d-flex justify-content-center align-items-center" +
                (!frontPage ? " showInfo" : "")
              }
              dNoneToBlock="lg"
              menu
              menuExpand
              phoneMenu={phoneMenu}
              frontPage={frontPage}
              side={"right"}
            >
              <div className={"gradientDiv" + (mode === 2 ? " active" : "")} />
              <Arrow
                mode={mode}
                className="arrow1"
                animate={{ top: $padding1, left: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 0.8,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                mode={mode}
                className="arrow2"
                animate={{ top: $padding1, right: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 0.8,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                mode={mode}
                className="arrow3"
                animate={{ bottom: $padding1, left: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 0.8,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <Arrow
                mode={mode}
                className="arrow4"
                animate={{ bottom: $padding1, right: $padding1 }}
                transition={{
                  ease: "easeIn",
                  delay: 0.8,
                  default: { duration: 1.05 },
                }}
              ></Arrow>
              <OverlayDiv
                mode={mode}
                animate="show"
                initial="initial"
                variants={overlayDivParentAnimation}
                className="d-flex justify-content-center align-items-center flex-column frontpage"
                transition={{ delay: 1.75, default: { duration: 1.65 } }}
              >
                <Picture
                  src={$profilePicture}
                  variants={overlayDivChildAnimation}
                />
                <motion.h3
                  className="myName textColor0"
                  variants={overlayDivChildAnimation}
                  style={{ marginTop: $margin1 }}
                >
                  Eduardo Botelho
                </motion.h3>
                <motion.ul
                  className="d-flex unstyled noMnoP iconList"
                  variants={overlayDivChildAnimation}
                  style={{ marginBottom: $margin1 }}
                >
                  <motion.li
                    className="clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href={""}>
                      <motion.a
                        variants={overlayDivChildAnimation}
                        target={"_blank"}
                        href={
                          "https://www.linkedin.com/in/eduardobotelho1029/?locale=en_US"
                        }
                      >
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                      </motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href="">
                      <motion.a
                        variants={overlayDivChildAnimation}
                        target={"_blank"}
                        href={"https://github.com/UPSxACE"}
                      >
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                      </motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href="">
                      <motion.a
                        href={"https://www.instagram.com/upsxace/"}
                        target="_blank"
                        variants={overlayDivChildAnimation}
                      >
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                      </motion.a>
                    </Link>
                  </motion.li>
                  <motion.li
                    className="clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                  >
                    <Link href="">
                      <motion.a
                        href={"https://www.facebook.com/eduardo1029x/"}
                        target="_blank"
                        variants={overlayDivChildAnimation}
                      >
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                      </motion.a>
                    </Link>
                  </motion.li>
                </motion.ul>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        clearTimeout(delayTimer);
                        let tabWhenPressed = tab;
                        delayTimer = setTimeout(() => {
                          if (tabWhenPressed % 2 !== 0)
                            //the tab value is verified again to avoid bugs related to the fact of setTimeout being an asynchronous function
                            setTab(tabWhenPressed + 1);
                        }, 1000);
                        toggleFrontPage(true);
                        togglePhoneMenu(false);
                        setCheckbox(false);
                      }
                    }}
                  >
                    Home
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        clearTimeout(delayTimer);
                        toggleFrontPage(false);
                        togglePhoneMenu(false);
                        setCheckbox(false);
                        setTab(1);
                      }
                    }}
                  >
                    About Me
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        clearTimeout(delayTimer);
                        toggleFrontPage(false);
                        togglePhoneMenu(false);
                        setCheckbox(false);
                        setTab(3);
                      }
                    }}
                  >
                    My Resume
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        clearTimeout(delayTimer);
                        toggleFrontPage(false);
                        togglePhoneMenu(false);
                        setCheckbox(false);
                        setTab(5);
                      }
                    }}
                  >
                    Projects
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className="menuItem clickable1 textColor0"
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        clearTimeout(delayTimer);
                        toggleFrontPage(false);
                        togglePhoneMenu(false);
                        setCheckbox(false);
                        setTab(7);
                      }
                    }}
                  >
                    Contact Me
                  </motion.h4>
                </Link>
                <Link href={"/"}>
                  <motion.h4
                    className={
                      "menuItem clickable1 textColor0" +
                      (spin ? " spinTransition" : "")
                    }
                    mode={mode}
                    variants={overlayDivChildAnimation}
                    onClick={() => {
                      if (!spin) {
                        switch (mode) {
                          case 0:
                            props.setMode(mode + 1);
                            break;
                          case 1:
                            props.setMode(mode + 1);
                            break;
                          case 2:
                            props.setMode(0);
                            break;
                          default:
                            props.setMode(0);
                            break;
                        }
                        setSpin(true);
                        setTimeout(() => {
                          setSpin(false);
                        }, 2000);
                      }
                    }}
                  >
                    <BsGearFill variants={overlayDivChildAnimation} />
                  </motion.h4>
                </Link>
              </OverlayDiv>
            </ResizableContainerHalfCol>

            <ResizableFixedCol
              xs={12}
              className={
                "g-0 extra d-flex justify-content-center align-items-center"
              }
              frontPage={frontPage}
              side={"extra"}
            >
              {/* for SEO reasons, initially, all the content will be loaded */}
              {tab % 2 === 0 ? (
                pages.map((page, index) => {
                  return (
                    <>
                      <ContentDiv
                        className={
                          "h-100 w-100" +
                          (tab !== 0 && tab !== (index + 1) * 2 ? " zero" : "")
                        }
                        mode={mode}
                      >
                        {page}
                      </ContentDiv>
                    </>
                  );
                })
              ) : (
                <PageTransition preset={getAnimation()} transitionKey={tab}>
                  <ContentDiv mode={mode} className="h-100">
                    {pages[(tab - 1) / 2]}
                  </ContentDiv>
                </PageTransition>
              )}
            </ResizableFixedCol>
          </Row>
        </MainContainer>
      </Main>
    </div>
  );
}

const ContentDiv = styled.div`
  overflow-y: auto;
  background-color: ${(props) => $color0[props.mode]};
`;

const ButtonPairWrapper = styled.div`
  button {
    margin: 0.75rem;
  }
`;

const MainContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

   {
    /* make this compatible with the starting frontpage animation later... 
  .arrow1,
  .arrow2,
  .arrow3,
  .arrow4 {
    opacity: 1;
    transition-delay: 0.1s;
    transition-duration: 0.7s;
  }
  */
  }

  .showInfo .arrow1,
  .showInfo .arrow2,
  .showInfo .arrow3,
  .showInfo .arrow4 {
    transition-delay: 0.1s;
    transition-duration: 0.7s;
    opacity: 0;
  }

  @media (max-width: 991px) {
    .arrow1,
    .arrow2,
    .arrow3,
    .arrow4 {
      transition-delay: 0.5s;
      opacity: 1;
    }

    .menuExpand .arrow1,
    .menuExpand .arrow2,
    .menuExpand .arrow3,
    .menuExpand .arrow4 {
      transition-delay: 0s;
      opacity: 0;
    }
  }
`;

const Picture = styled(motion.img)`
  display: inline-block;
  height: 8rem;
  width: 8rem;
  //padding: 4rem;
   {
    /* make it a perfect circle */
  }
  //background-color: black;
  border-radius: 100%;
`;

function ResizableContainerHalfCol(props) {
  let [ref, { width }] = useMeasure();
  const mode = useContext(ThemeContext);

  return (
    <Col
      className={
        (props.dNoneToBlock
          ? "contentCol d-none d-" + props.dNoneToBlock + "-block"
          : "contentCol") +
        (props.menu ? " menu" : "") +
        (props.menuExpand && props.phoneMenu === true ? " menuExpand" : "") +
        (!props.frontPage ? " showInfo" : "") +
        (props.side ? " " + props.side : "")
      }
      style={props.style}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      xxl={props.xxl}
      ref={ref}
    >
      <motion.div
        className="h-100"
        animate={{ width }}
        transition={{ type: "tween", duration: 0 }}
      >
        <ContainerHalf
          className={
            props.className +
            " h-100" +
            (props.dNoneToBlock ? " d-" + props.dNoneToBlock + "-block" : "")
          }
          mode={mode}
        >
          {props.children}
        </ContainerHalf>
      </motion.div>
    </Col>
  );
}

function ResizableFixedCol(props) {
  let [ref, { width }] = useMeasure();
  const mode = useContext(ThemeContext);

  return (
    <FixedCol
      className={
        (props.dNoneToBlock
          ? "contentCol d-none d-" + props.dNoneToBlock + "-block"
          : "contentCol") +
        (props.menu ? " menu" : "") +
        (props.menuExpand && props.phoneMenu === true ? " menuExpand" : "") +
        " extra" +
        (!props.frontPage ? " showInfo" : "")
      }
      mode={mode}
      xs={12}
      style={props.style}
      ref={ref}
    >
      <motion.div
        className="h-100"
        animate={{ width }}
        transition={{ type: "tween" }}
      >
        <ContainerHalf
          className={
            props.className +
            " h-100" +
            (props.dNoneToBlock ? " d-" + props.dNoneToBlock + "-block" : "")
          }
          mode={mode}
        >
          {props.children}
        </ContainerHalf>
      </motion.div>
    </FixedCol>
  );
}

const FixedCol = styled(Col)`
  position: fixed !important;
  background-color: ${(props) => $backgroundColor[props.mode]};
   {
    /* this is the color that will be behind the content col background */
  }
  height: 100% !important;
  transition-duration: 1s;
  top: 0px;

  @media (max-width: 991px) {
    height: calc(100% - 60px) !important;
    width: 100% !important;
    top: 60px;
  }
`;

const ContainerHalf = styled.div`
  .gradientDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;

    /* ff 3.6+ */
    background: -moz-linear-gradient(
      18deg,
      rgba(47, 40, 27, 1) 0%,
      rgba(96, 82, 55, 0.95) 36%,
      rgba(96, 82, 55, 0.95) 38%,
      rgba(83, 71, 47, 1) 52%,
      rgba(47, 40, 27, 1) 81%,
      rgba(47, 40, 27, 1) 100%
    );

    /* safari 5.1+,chrome 10+ */
    background: -webkit-linear-gradient(
      18deg,
      rgba(47, 40, 27, 1) 0%,
      rgba(96, 82, 55, 0.95) 36%,
      rgba(96, 82, 55, 0.95) 38%,
      rgba(83, 71, 47, 1) 52%,
      rgba(47, 40, 27, 1) 81%,
      rgba(47, 40, 27, 1) 100%
    );

    /* opera 11.10+ */
    background: -o-linear-gradient(
      18deg,
      rgba(47, 40, 27, 1) 0%,
      rgba(96, 82, 55, 0.95) 36%,
      rgba(96, 82, 55, 0.95) 38%,
      rgba(83, 71, 47, 1) 52%,
      rgba(47, 40, 27, 1) 81%,
      rgba(47, 40, 27, 1) 100%
    );

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2F281B', endColorstr='#2F281B', GradientType=1 );

    /* ie 10+ */
    background: -ms-linear-gradient(
      18deg,
      rgba(47, 40, 27, 1) 0%,
      rgba(96, 82, 55, 0.95) 36%,
      rgba(96, 82, 55, 0.95) 38%,
      rgba(83, 71, 47, 1) 52%,
      rgba(47, 40, 27, 1) 81%,
      rgba(47, 40, 27, 1) 100%
    );

    /* global 94%+ browsers support */
    background: linear-gradient(
      18deg,
      rgba(47, 40, 27, 1) 0%,
      rgba(96, 82, 55, 0.95) 36%,
      rgba(96, 82, 55, 0.95) 38%,
      rgba(83, 71, 47, 1) 52%,
      rgba(47, 40, 27, 1) 81%,
      rgba(47, 40, 27, 1) 100%
    );
  }

  .gradientDiv.active {
    opacity: 1;
  }

  &.left {
    background-color: ${(props) => $color6[props.mode]};
    z-index: 90;
  }

  &.right {
    background-color: ${(props) => $color1[props.mode]};
    position: relative;
    box-shadow: 0 0 15px rgb(0 0 0 / 7%);
  }
`;

const Arrow = styled(motion.span)`
  height: 45px;
  width: 45px;

  &.arrow1 {
    position: absolute;
    top: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }
    left: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset 8px 8px 0px 0px ${(props) => $textColor0[props.mode]};
  }
  &.arrow2 {
    position: absolute;

    top: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }
    right: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }
    box-shadow: inset -8px 8px 0px 0px ${(props) => $textColor0[props.mode]};
  }
  &.arrow3 {
    position: absolute;
    bottom: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }
    left: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset 8px -8px 0px 0px ${(props) => $textColor0[props.mode]};
  }
  &.arrow4 {
    position: absolute;
    bottom: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }
    right: calc(50% + 80px);
     {
      /* maybe should be configurable later */
    }

    box-shadow: inset -8px -8px 0px 0px ${(props) => $textColor0[props.mode]};
  }
`;

const OverlayDiv = styled(motion.div)`
  @media (max-width: 991px) {
    opacity: 1 !important;
  }

  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  /*background-color: red;*/
  height: 100%;
  width: 100%;

  *:not(svg):not(path) {
    opacity: 0;
  }

  &.frontpage .menuItem {
    margin-bottom: 2px;
  }

  &.frontpage .myName {
    font-weight: 500;
  }

  .spinTransition {
    transform: scale(1.22);
    transition: scale(1.22) 0.16s, color 0.16s;
    color: ${(props) => $color2Alt[props.mode]}!important; //${(props) =>
      $color2[props.mode]}!important;
  }

  .spinTransition svg {
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const overlayDivChildAnimation = {
  initial: { opacity: 0 },
  show: { opacity: 1 },
};

const overlayDivParentAnimation = {
  show: { opacity: 1 },
};
