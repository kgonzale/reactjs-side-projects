import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../loading.css";

const Loading = () => {
  return (
    <div className="sweet-loading" id="outer">
      <p id="text">Loading Data</p>
      <ScaleLoader sizeUnit={"px"} size={25} color={"#860011"} />
    </div>
  );
};

export default Loading;
