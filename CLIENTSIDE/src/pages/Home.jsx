import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";


function Home() {
  //const [searchImage, setSearchImage] = useState("");
  const { state, dispatch } = useContext(MyContext);
  const { searchImage, searchQuery } = state;

  return (
    <div>
      <div className="home">
      </div>
    </div>
  );
}

export default Home;
