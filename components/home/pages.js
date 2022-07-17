import { OtherSection, Section, SubSection } from "./section";
import { ProfilePicture } from "./profilePicture";
import { IconSpanDiv } from "./iconSpanDiv";
import {
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { Container, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { $color1 } from "../../utils/config";
import { createTheme, LinearProgress } from "@mui/material";
import { ProgressBar } from "../progressBar";
import {
  frameworks,
  hard_skills,
  programming_languages,
  soft_skills,
} from "./skills";
import { VerticalTimeLine } from "./timeline";
import { education } from "./education";
import { experience } from "./experience";
import { Squares } from "./squares";
import { ContactCard } from "./contactCard";
import { FormWrapper } from "../form";
import { Button1, Button2 } from "../buttons";
import { $borderColorSolid, $borderColor } from "../../utils/config";
import { GrLocation, GrMailOption, GrPhone } from "react-icons/gr";
import { $color2 } from "../../utils/config";

const ContentDiv = styled.div`
  overflow-y: auto;
  background-color: ${$color1};
`;
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
          <Col xs={12} xl={6} xxl={4}></Col>
        </Row>
      </Container>
    </Section>
  </>,
  <Section key={3} className="d-flex flex-column" title="Contact Me" dh100>
    <Container className="flex-grow-1 d-flex flex-column" fluid>
      <Row className="pt-4 pt-xxl-5 d-flex flex-column flex-grow-1">
        <Col xs={12} className="d-flex flex-wrap">
          <Col xs={12} xxl={4}>
            <SubSection title="Location">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.00302705745!2d-6.757794067689142!3d41.806695211428085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a49fc3e4f4915%3A0xe96f35f2dfacc35!2sLargo%20Cel.%20Albino%20Lopo%2023%2C%205300-111%20Bragan%C3%A7a!5e0!3m2!1spt-PT!2spt!4v1657979060419!5m2!1spt-PT!2spt"
                width="100%"
                height="520px"
                style={{ border: `1px solid ${$borderColor}` }}
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
            >
              <Form.Group className="group" controlId="name">
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  defaultValue=""
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
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please write a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button1 className="static" style={{ height: 48 }} type="submit">
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
  </Section>,
];
