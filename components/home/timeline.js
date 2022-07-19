import styled, { ThemeContext } from "styled-components";
import {
  $borderColor,
  $borderColorLighter,
  $color1,
  $color2,
} from "../../utils/config";
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from "react";

export function VerticalTimeLine(props) {
  const mode = useContext(ThemeContext);

  return (
    <OutsideDiv mode={mode} className="d-flex flex-column flex-grow-1">
      {props.cards.map((card, index) => {
        return (
          <Card mode={mode} key={"card" + index} className="mb-4 mb-4b ps-3">
            <div className="triangle" />
            <div className="line" />
            <h6 className="date d-flex color2">
              <FaCalendarAlt className="me-1" />
              {card.date}
            </h6>
            <h5 className="card-title fw-500">{card.title}</h5>
            <p
              dangerouslySetInnerHTML={{ __html: card.desc }}
              className="desc"
            ></p>
          </Card>
        );
      })}
    </OutsideDiv>
  );
}

const OutsideDiv = styled.div`
  height: max-content;
  width: 100%;
  border-left: 4px solid ${$color2};
`;

const Card = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid ${$borderColorLighter};
  //border-radius: 8px;
  width: calc(100% - 16px);
  //min-height: 150px;
  margin-left: 16px;

  .triangle {
    position: absolute;
    top: 24px;
    left: -17px;
    height: 0px;
    width: 0px;
    border: 6px solid transparent;
    border-left: 6px solid ${$color2};
  }

  .line {
    position: absolute;
    background-color: ${$color2};
    top: 29px;
    left: -16px;
    height: 2px;
    width: 16px;
  }

  .date {
    padding-top: 21px;
    margin-bottom: 4px;
  }

  .card-title {
    margin-bottom: 4px;
  }

  .desc {
  }
`;
