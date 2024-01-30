import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";
import {useMatch} from "react-router-dom";
import axios from "axios";
import "./ReviewUploadedImages.css";

const backendURL = `http://localhost:5500`;


function CategoryResults() {
    const { state, dispatch } = useContext(MyContext);
    const { allUploads, categories } = state;

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
    <div className="uploads-container">
        {categoryImages.map(upload => (
          <div className="upload-item" key={upload._id}>
            <img
              src={`${upload.imageURL}`}
              style={{ width: '200px', height: 'auto' }}
            />
            <p> {upload.fileName}</p>
          </div>
        ))}
      </div>
  )
}

export default CategoryResults