import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";
import {useMatch} from "react-router-dom";
import axios from "axios";
import DownloadButton from "../components/DownloadButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReviewUploadedImages.css";

const backendURL = `http://localhost:5500`;


function CategoryResults() {
    const { state, dispatch } = useContext(MyContext);
    const { allUploads } = state;

    const match = useMatch('/categories/:selectedCategory')
    const selectedCategory = match?.params.selectedCategory;
    // Use state to store categoryImages
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    // Filter images based on the selected category
    const filteredImages = allUploads.filter(upload =>
      upload.categories.includes(selectedCategory)
    );

    setCategoryImages(filteredImages);

    // Dispatch action to update categories in the context
    dispatch({ type: 'SetCategories', payload: filteredImages });
  }, [selectedCategory, allUploads, dispatch]);

  return (
    <div className="container-fluid bg-light min-vh-100 p-lg-5">
      <h2 className="text-center" > {selectedCategory.toUpperCase()}</h2>
      {allUploads ? (
        <div className="row justify-content-center">
          {categoryImages.map((upload) => (
            <div key={upload._id} className="col-md-4 mb-4">
              <div className="card" >
                <img
                  src={`${upload.imageURL}`}
                  alt={upload.fileName}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  // onContextMenu={handleImgRightClick}
                />
                <div className="card-body">
                  <h5 className="card-title">{upload.tags.join(' ')}</h5>
                 {/*  <p className="card-text">Author: {upload.author}</p> */}
                 <DownloadButton fileName={upload.fileName} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center">No search results found :\</h3>
      )}
    </div>
  )
}

export default CategoryResults