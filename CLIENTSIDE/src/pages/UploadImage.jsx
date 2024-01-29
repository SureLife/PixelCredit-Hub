import React, { useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/MyContext";
import "bootstrap/dist/css/bootstrap.min.css";

const backendURL = "http://localhost:5500";

const UploadImage = () => {
  const { state, dispatch } = useContext(MyContext);
  const { user, selectedFile, tags, categories } = state;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    dispatch({
      type: "SetSelectedFile",
      payload: file,
    });
  };

  const handleTagsChange = (e) => {
    const tagsValue = e.target.value.split(" ") // Replace multiple spaces with single space and trim spaces
    dispatch({
      type: "SetTags",
      payload: tagsValue,
    });
  };

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    dispatch({
      type: "SetCategories",
      payload: categoryValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }
    if (!tags) {
      alert("Please tag your upload.");
      return;
    }
    if (!categories) {
      alert("Please give minimum one category to your upload.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("foo", selectedFile); // Use the same key that server expects ("foo")
      formData.append("tags", tags); // Append tags to formData
      formData.append("categories", categories);// Append categories to formData
      const response = await axios.post(
        `${backendURL}/images/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server Response:", response.data);
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container p-5">
      <div className="card-body p-5">
        <h2 className="w-100 text-center mb-5">PixelCreditHub</h2>
        {user && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                name="Image"
                id="ImageInput"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-3">
              <input
              name='tags' 
                type="text"
                placeholder="Enter tags"
                value={tags}
                onChange={handleTagsChange}
              />
            </div>
            <div className="mb-3">
              <input
              name='categories' 
                type="text"
                placeholder="Enter category"
                value={categories}
                onChange={handleCategoryChange}
                
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
