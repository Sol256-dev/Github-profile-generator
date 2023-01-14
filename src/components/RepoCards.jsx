import { Link } from "react-router-dom";

const RepoCards = (props) => {
  return (
    <div className="repos-diplay">
      <div className="repo-details-1">
        {" "}
        <a href={props.link} target="_blank">
          <h3>{props.name}</h3>
        </a>
        {props.private ? "" : <span>Public</span>}
        {props.language === "HTML" ? (
          <span>HTML</span>
        ) : props.language === "JavaScript" ? (
          <span>Javascript</span>
        ) : props.language === "Ruby" ? (
          <span>Ruby</span>
        ) : props.language === "Python" ? (
          <span>Python</span>
        ) : props.language === "CSS" ? (
          <span>CSS</span>
        ) : props.language === null ? (
          <span>Null</span>
        ) : props.language === "C" ? (
          <span>C programming</span>
        ) : props.language === "Shell" ? (
          <span>Shell</span>
        ) : (
            <span>Unidentified</span>
        )}
      </div>
      <div className="repo-details">
        <div className="repo-details-2">Watchers: {props.watchers}</div>
        <div className="repo-details-2">
          Created: {props.created.toString().slice(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default RepoCards;
