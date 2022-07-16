import { OtherSection, Section, SubSection } from "./section";
import { ProfilePicture } from "./profilePicture";
import { IconSpanDiv } from "./iconSpanDiv";
import {
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHome,
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
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
  <div key={3}>BBBBBBBBBBBBBBBBBBBBB</div>,
];
