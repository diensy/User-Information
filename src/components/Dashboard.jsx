import React from "react";

import Navbar from "./Navbar";
import Slidebar from "./Slidebar";

const Dashboard = ({ slidebar, hideSlidebar }) => {
  console.log("dashbord");
  return (
    <>
      <Slidebar slidebar={slidebar} />
      <div className="w-full">
        <Navbar slidebar={slidebar} hideSlidebar={hideSlidebar} />
      </div>
    </>
  );
};

export default React.memo(Dashboard);
