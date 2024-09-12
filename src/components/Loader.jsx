import React from "react";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <BeatLoader
            className="text-center my-72"
            size={30}
            margin={20}
            color="#525252"
            speedMultiplier={0.9}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Loader;
