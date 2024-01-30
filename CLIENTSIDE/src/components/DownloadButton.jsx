import React  from "react";

import axios from "axios";

const DownloadButton = ({ fileName }) => {
  const backendURL = `http://localhost:5500`;
  const handleDownloadClick = async () => {
    try {
      const response = await axios.get(
        `${backendURL}/images/singleimage/${fileName}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  /*   useEffect(() => {
    async function fetchSingleImages() {
      try {
        console.log(fileName);
        const response = await axios.get(
          `${backendURL}/images/singleimage/${fileName}`
        );
        console.log(response);
        //dispatch({ type: "setsingleMember", payload: response.data });
      } catch (error) {
        console.error("Error fetching singleImage details:", error);
      }
    }

    fetchSingleImages();
  }, []);  */

  return (
    <div>
      <button onClick={handleDownloadClick}>download image</button>
    </div>
  );
};

export default DownloadButton;
