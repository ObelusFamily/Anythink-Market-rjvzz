import React from "react";
import logo from "../../imgs/logo.png";

const Banner = ({search, setSearch}) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get </span>
            <input id="search-box"
                   type="text"
                   placeholder="What is it you truly desire?"
                   onChange={event => setSearch(event.target.value)}
                   value={search}
            />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
