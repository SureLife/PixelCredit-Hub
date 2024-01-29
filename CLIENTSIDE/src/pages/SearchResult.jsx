import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function SearchResult() {
  const { state, dispatch } = useContext(MyContext);
  const { allUploads, searchQuery } = state;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const backendURL = `http://localhost:5500`;

  useEffect(() => {
    async function fetchSearchedImages() {
      try {
        console.log(query);
        const response = await axios.get(
          `${backendURL}/images/alluploadedimages/approved/${query}`
        );
        dispatch({ type: "setAllUploads", payload: response.data });

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching allUploads details:", error);
      }
    }

    fetchSearchedImages();
  }, [query, dispatch]);

  const handleImgRightClick = (e) => {
    if (e.button === 2) {
      e.preventDefault();
    }
  };
  return (
    <div className="container-fluid bg-light min-vh-100 p-lg-5">
      <h2 className="text-center">Selected Category / Search Results</h2>
      {allUploads ? (
        <div className="row justify-content-center">
          {allUploads.map((upload) => (
            <div key={upload._id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={`${upload.imageURL}`}
                  alt={upload.fileName}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  onContextMenu={handleImgRightClick}
                />
                <div className="card-body">
                  <h5 className="card-title">{upload.fileName}</h5>
                 {/*  <p className="card-text">Author: {upload.author}</p> */}
                  <a href={upload.sourceURL} className="btn btn-primary">
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center">No search results found :\(</h3>
      )}
    </div>
  );
}

export default SearchResult;