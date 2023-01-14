import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
        <p>Oops!</p>
        <div className="error-message">{error.data}</div>
        <p>{error.statusText || error.status}</p>
    </div>
  );
};

export default ErrorPage;
