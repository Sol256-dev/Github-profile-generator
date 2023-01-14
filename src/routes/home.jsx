import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBox from "../components/Search";

const HomePage = () => {
  const [data, setData] = useState("");
  const [profile, setProfile] = useState("");

  localStorage.setItem("repoUrl", data.repos_url);
  localStorage.setItem("userName", data.name);

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

  const searchUserProfile = () => {
    fetch(`https://api.github.com/users/${profile}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    searchUserProfile();
  }, [profile]);

  console.log(profile);

  return (
    <div className="container">
      <div className="nav">
        <Header />
        <SearchBox setProf={setProfile} />
      </div>
      <div className="main">
        <div className="section">
          {profile === "" ? (
            <div className="home-msg"><h1>No content to display!</h1></div>
          ) : (
            <Card data={data} />
          )}
          <div className="repos-display">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
