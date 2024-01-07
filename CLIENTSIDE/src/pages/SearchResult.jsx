import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";


function SearchResult() {
  const { state, dispatch } = useContext(MyContext);
  const { searchImage, searchQuery } = state;
  return (
    <div>
      <h2 className="cats">Selected Category / Search Results</h2>
      {searchQuery === "" ? <h3>No search results found :\</h3> : 
        <div className="menu">
          {/* {state && (
            <div>
              <h1>{state.result}</h1>
              {state.pictures.map((pic) => {
                return (
                  <div key={pic._id}>               
                      <div>
                        <img
                          src={pic.imageUrl}
                          width={200}
                          alt="restaurant image"
                        />
                        <h2>{pic.name}</h2>
                        <p>{pic.description}</p>
                        <button onClick={() => addToCart(picture)}>Add to Cart</button>
                      </div>
                    </div>        
                );
              })}
            </div>
          )} */}

        </div>
      }
    </div>
  )
}

export default SearchResult


