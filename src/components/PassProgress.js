import zxcvbn from "zxcvbn";

const PassProgress = ({ password }) => {
  const result = zxcvbn(password);
  const num = (result.score * 100) / 4;

  const progressLabel = () => {
    switch (result.score) {
      case 0:
        return "very week";
      case 1:
        return "week";
      case 2:
        return "normal";
      case 3:
        return "good";
      case 4:
        return "storng";
      default:
        return "";
    }
  };

  const progressColor = () => {
    switch (result.score) {
      case 0:
        return "#828282";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
    height: "7px",
  });

  return (
    <div>
      <div>
        <div style={changePasswordColor()}></div>
      </div>
      <p style={{ color: progressColor() }}>{progressLabel()}</p>
    </div>
  );
};

export default PassProgress;
