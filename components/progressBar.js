import { LinearProgress } from "@mui/material";

export function ProgressBar(props) {
  function getValueText(value) {
    if (value <= 40) {
      // smaller than 40
      if (value <= 20) {
        // 0-20
        return "Learning";
      } else {
        //21-40
        return "Comfortable";
      }
    } else {
      // bigger than 40
      if (value <= 60) {
        // 41-60
        return "Effective";
      } else {
        if (value <= 80) {
          // 61-80
          return "Solid";
        } else {
          // 81-100
          return "Great";
        }
      }
    }
  }

  return (
    <div className="pb-2">
      <div className="d-flex">
        <span className="w-50 h5 textColor1">{props.skill}</span>
        <span className="w-50 text-end h5 fw-300">
          {getValueText(props.value)}
        </span>
      </div>

      <LinearProgress variant="determinate" value={props.value} />
    </div>
  );
}
