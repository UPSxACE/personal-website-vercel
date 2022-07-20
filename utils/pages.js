import { OtherSection, Section, SubSection } from "../components/home/section";
import { ProfilePicture } from "../components/home/profilePicture";
import { IconSpanDiv } from "../components/home/iconSpanDiv";
import {
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { Container, Row, Col, Form } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import {
  $color1,
  $emjs_endpoint,
  $emjs_service_id,
  $emjs_template_id,
  $emjs_user_id,
  $mapLocation,
} from "./config";
import { createTheme, LinearProgress } from "@mui/material";
import { ProgressBar } from "../components/progressBar";
import {
  frameworks,
  hard_skills,
  programming_languages,
  soft_skills,
} from "./skills";
import { VerticalTimeLine } from "../components/home/timeline";
import { education } from "./education";
import { experience } from "./experience";
import { Squares } from "../components/home/squares";
import { ContactCard } from "../components/home/contactCard";
import { FormWrapper } from "../components/form";
import { Button1, Button2 } from "../components/buttons";
import { $borderColorSolid, $borderColor } from "./config";
import { GrLocation, GrMailOption, GrPhone } from "react-icons/gr";
import { $color2 } from "./config";
import { ProjectGallery } from "../components/home/projectGallery";
import axios from "axios";
import { useContext, useRef } from "react";

export const pages = [
  <>
    <Section key={0} title="About Me">
      <Container fluid>
        <Row className="pt-5">
          <Col xs={12} xl={6} xxl={4}>
            <ProfilePicture />
          </Col>
          <Col className="d-flex flex-column" xs={12} xl={6} xxl={8}>
            <h2 className="pt-5 pt-xl-0">Eduardo Botelho</h2>
            <h5>Software Development Student</h5>
            <p>
              I started learning how to code by myself on the internet in 2020,
              and now I am currently studying to become a Software Engineer. I
              love to solve problems, to overcome challenges, and to create
              things!
            </p>
            <IconSpanDiv icon={<AiOutlineCalendar />}>
              11th January, 2001
            </IconSpanDiv>
            <IconSpanDiv flip icon={<AiOutlinePhone />}>
              +351 962 075 694
            </IconSpanDiv>
            <IconSpanDiv icon={<AiOutlineMail />}>
              eduardo11224b@gmail.com
            </IconSpanDiv>
            <IconSpanDiv icon={<AiOutlineHome />}>
              Bragança, Portugal
            </IconSpanDiv>
          </Col>
          <Squares />
        </Row>
      </Container>
    </Section>
  </>,
  <>
    <Section key={1} title="My Resume">
      <Container fluid>
        <Row className="pt-5">
          <Col className="pe-xxl-4" xs={12} xxl={6}>
            <SubSection title="Soft Skills">
              {soft_skills.map((soft_skill, index) => {
                return (
                  <ProgressBar
                    key={"softskill" + index}
                    skill={soft_skill[0]}
                    variant="determinate"
                    value={soft_skill[1]}
                  />
                );
              })}
            </SubSection>
          </Col>

          <Col className="pt-5 pt-xxl-0 ps-xxl-4" xs={12} xxl={6}>
            <SubSection title="Hard Skills">
              {hard_skills.map((hard_skill, index) => {
                return (
                  <ProgressBar
                    key={"hardskill" + index}
                    skill={hard_skill[0]}
                    variant="determinate"
                    value={hard_skill[1]}
                  />
                );
              })}
            </SubSection>
          </Col>

          <Col className="pt-5 pe-xxl-4 d-flex flex-column" xs={12} xxl={6}>
            <SubSection title="Education"></SubSection>
            <VerticalTimeLine cards={education}></VerticalTimeLine>
          </Col>
          <Col className="pt-5 ps-xxl-4 d-flex flex-column" xs={12} xxl={6}>
            <SubSection title="Experience"></SubSection>
            <VerticalTimeLine cards={experience}></VerticalTimeLine>
          </Col>
        </Row>
      </Container>
    </Section>
  </>,
  <>
    <Section key={2} title="Projects">
      <Container fluid>
        <Row className="pt-5">
          <Col xs={12}>
            <ProjectGallery />
          </Col>
        </Row>
      </Container>
    </Section>
  </>,
  <ContactSection key={3} />,
];

function ContactSection(props) {
  const nameref = useRef("");
  const emailref = useRef("");
  const messageref = useRef("");
  const mode = useContext(ThemeContext);

  function submitForm(form) {
    const sendPostRequest = async () => {
      try {
        let formData = new FormData(form);
        //formdata.append("image", file);
        formData.append("service_id", $emjs_service_id); //emailjs library field
        formData.append("template_id", $emjs_template_id); //emailjs library field
        formData.append("user_id", $emjs_user_id); //emailjs library field
        formData.append("name", nameref.current.value);
        formData.append("email", emailref.current.value);
        formData.append("message", messageref.current.value);

        const resp = await axios.post(
          $emjs_endpoint, //emailjs api
          formData,
          {
            headers: {
              //"content-type": "multipart/form-data",
            },
          }
        );

        alert(
          "Thank you for reaching out! You will be contacted back as soon as possible."
        );
      } catch (err) {
        alert("Oops! Error: " + err);
      }
    };

    sendPostRequest();
  }

  return (
    <Section className="d-flex flex-column" title="Contact Me" dh100>
      <Container className="flex-grow-1 d-flex flex-column" fluid>
        <Row className="pt-4 pt-xxl-5 d-flex flex-column flex-grow-1">
          <Col xs={12} className="d-flex flex-wrap">
            <Col xs={12} xxl={4}>
              <SubSection title="Location">
                <iframe
                  className="map"
                  src={$mapLocation}
                  width="100%"
                  height="520px"
                  style={{ border: `1px solid ${$borderColor[mode]}` }}
                  allowFullScreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </SubSection>
            </Col>
            <Col
              className="pt-4 pt-xxl-0 ps-xxl-4 d-flex flex-column h100fix7px"
              xs={12}
              xxl={8}
            >
              <SubSection title="Contact Form"></SubSection>
              <FormWrapper
                className="d-flex flex-column"
                style={{ minHeight: 520 }}
                afterValid={submitForm}
              >
                <Form.Group className="group" controlId="name">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                    ref={nameref}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    This field is mandatory.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="group" controlId="email">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    defaultValue=""
                    ref={emailref}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="group textarea d-flex flex-column"
                  controlId="message"
                >
                  <Form.Control
                    as={"textarea"}
                    className=""
                    required
                    type
                    placeholder="Message"
                    defaultValue=""
                    ref={messageref}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please write a message.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button1
                  className="static"
                  style={{ height: 48 }}
                  type="submit"
                >
                  <span className="h4 textColor2">Submit</span>
                </Button1>
              </FormWrapper>
            </Col>
          </Col>

          <Col xs={12} className="flex-grow-1 d-flex flex-wrap pt-5 pt-xxl-3">
            <Col xs={12} xxl={4} className="pe-xxl-2">
              <ContactCard>
                <h1 className="icon pb-2">
                  <GrLocation />
                </h1>
                <h4 className="fw-300">Bragança, Portugal</h4>
              </ContactCard>
            </Col>
            <Col xs={12} xxl={4} className="pt-3 pt-xxl-0 ps-xxl-2 pe-xxl-2">
              <ContactCard>
                <h1 className="icon pb-2">
                  <GrMailOption />
                </h1>
                <h4 className="fw-300">eduardo11224b@gmail.com</h4>
              </ContactCard>
            </Col>
            <Col xs={12} xxl={4} className="pt-3 pt-xxl-0 ps-xxl-2">
              <ContactCard>
                <h1 className="icon pb-2">
                  <GrPhone />
                </h1>
                <h4 className="fw-300">+351 962 075 694</h4>
              </ContactCard>
            </Col>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
