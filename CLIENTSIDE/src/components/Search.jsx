import { useNavigate } from "react-router-dom";
import React, { useContext, useRef } from "react";
import { MyContext } from "../context/MyContext";
import Button from "./Button";
import "./Search.css";
const backendURL = `http://localhost:5500`;

function Search() {
  const { state, dispatch } = useContext(MyContext);
  const { searchImage, searchQuery } = state;

  const navigate = useNavigate();

  const searchInput = useRef(null); // This stores the search input value.

  // If Enter key is pressed, trigger the search action
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputChange();
      handleSearch();    
    }
  };

  const handleInputChange = () => {
    searchInput.current.focus();
    dispatch({ type: "SET_SEARCH_QUERY", payload: searchInput.current.value }) //sets the type to the current ref @ input
    // Navigate to the desired route
    navigate('/results');
  };
  
  const handleSearch = async () => {
    if (searchQuery === "") {
      console.log("Search query is empty.");
      return;
    }
    try {
      const response = await fetch(
        `${backendURL}/search/images?query=${searchQuery}`
        
      );

      if (!response.ok) {
        throw new Error("No network response.");
      }

      const data = await response.json();
      //setSearchImage(data);
      dispatch({ type: "SET_SEARCH_IMAGE", payload: data });

      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div className="searchContainer">
      <div className="search">
        <input
          className="input-field"
          type="text"
          placeholder="Find an image..."
          ref={searchInput}
          onKeyDown={handleKeyPress}
        />
        {/* the below link, links the submit button to search results */}
        {/* <Link to="/results">  */}
          <Button
            buttonText={<span>&#128269;</span>}
            className="searchBTN"
            onClick={() => {
              handleInputChange();
              handleSearch();
            }}
          />
        {/* </Link> */}
      </div>
      
    </div>
  );
}

export default Search;
