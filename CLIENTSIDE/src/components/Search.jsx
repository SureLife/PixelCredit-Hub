import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Button from "./Button";
import "./Search.css";
const backendURL = `http://localhost:5500`;

function Search() {
  const { state, dispatch } = useContext(MyContext);

  //const [searchImage, setSearchImage] = useState([]);
  //const [searchQuery, setSearchQuery] = useState("");
  const { searchImage, searchQuery } = state;

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchQuery) {
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
  const handleInputChange = (e) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };
  return (
    <div className="searchContainer">
      <div className="search">
        <input
          className="input-field"
          type="text"
          placeholder="Find an image..."
          value={searchQuery}
          /*  onChange={(e) => {
            dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
          }} */
          onChange={handleInputChange}
        />
        <Button
          buttonText={<span>&#128269;</span>}
          className="searchBTN"
          onClick={handleSearch}
        />
      </div>
      
    </div>
  );
}

export default Search;
