import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <>
      <div className="user-details">
        <img src={props.data.avatar_url} alt={props.data.name} />
        <h2>
          <a href={props.data.html_url} target="blank">
            {props.data.name}
          </a>
        </h2>
        <p>{props.data.bio}</p>
        <p className="user-details-cards">
          <div className="detail-card">
            <i className="fa fa-calendar "></i>Joined:
            <span>{props.data.created_at}</span>
          </div>
          <div className="detail-card active">
            <i className="fa fa-book"></i>{" "}
            <div className="repo-link" title="Show Repos below">
              <Link to="/repos">Repos:</Link>
            </div>
            <span>{props.data.public_repos}</span>
          </div>
          <div className="detail-card">
            <i className="fa fa-user"></i> Followers:
            <span>{props.data.followers}</span>
          </div>
          <div className="detail-card">
            <i className="fa fa-user"></i> Following:
            <span>{props.data.following}</span>
          </div>
          <div className="detail-card">
            <i className="fa fa-globe"></i> Location:
            <span>{props.data.location}</span>
          </div>
        </p>
      </div>
    </>
  );
};

export default Card;
