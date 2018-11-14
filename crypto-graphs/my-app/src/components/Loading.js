import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "../loading.css";

const Loading = () => {
  return (
    <div className="sweet-loading" id="outer">
      <p id="text">Loading Data</p>
      <BeatLoader sizeUnit={"px"} size={25} color={"#860011"} />
    </div>
  );
};

export default Loading;
