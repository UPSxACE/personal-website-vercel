import { LinearProgress } from "@mui/material";

export function ProgressBar(props) {
  function getValueText(value) {
    if (value <= 50) {
      // smaller than 50
      if (value <= 20) {
        // 0-20
        return "Learning";
      } else {
        //21-50
        return "Comfortable";
      }
    } else {
      // bigger than 50
      if (value <= 70) {
        // 51-70
        return "Effective";
      } else {
        if (value <= 85) {
          // 71-85
          return "Solid";
        } else {
          // 86-100
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
