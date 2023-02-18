import { useEffect, useState } from "react";
import RepoCards from "../components/RepoCards";

const Repos = () => {
  const [repoData, setRepoData] = useState([]);

  let repoUrl = localStorage.getItem("repoUrl");
  let name = localStorage.getItem("userName");

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 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"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const searchRepos = () => {
    fetch(repoUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => setRepoData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    searchRepos();
  }, []);

  return (
    <>
      <div className="title">
        <h2>
          A few of {name}'s Public Repos <hr />
        </h2>
        <>
          {repoData.map((item) => (
            <RepoCards
              name={item.name}
              language={item.language}
              watchers={item.watchers}
              link={item.html_url}
              created={item.created_at}
            />
          ))}
        </>
      </div>
    </>
  );
};

export default Repos;
