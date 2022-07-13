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
            <h2 className="pt-4 pt-xl-0">Eduardo Botelho</h2>
            <h5 className="pb-2 pt-2">Software Development Student</h5>
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
          <Col className="pt-4 pe-xxl-4" xs={12} xxl={6}>
            <SubSection title="Soft Skills">
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
            </SubSection>
          </Col>
          <Col className="pt-4 ps-xxl-4" xs={12} xxl={6}>
            <SubSection title="Hard Skills">
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
              <ProgressBar
                skill="Problem Solving"
                variant="determinate"
                value={50}
              />
            </SubSection>
          </Col>
        </Row>
      </Container>
    </Section>
  </>,
  <div key={2}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>,
  <div key={3}>BBBBBBBBBBBBBBBBBBBBB</div>,
];
