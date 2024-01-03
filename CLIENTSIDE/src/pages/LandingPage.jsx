import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="Home-Container">
      <div className="Home-cardContainer withBG">
        <div className="cardDiv">
          <h3>"Photography: where light and stories meet."</h3>
          <p>
            Enter a world of visual wonders where pixels narrate tales, colors
            dance, and each click unveils a masterpiece. Join our odyssey
            through beauty, elegance, and the sheer magic of storytelling.
            Welcome to a symphony of pixels transcending the ordinary, inviting
            you to witness the extraordinary.
          </p>
          <Link to="/categories" className="cat-Link">
            Explore Picture Wonderland
          </Link>
        </div>

        <div className="imageDiv">
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
        {/* <div key={image.id}  className="your-class-name">
          <Link to={`/image/${image.id}`}>
            <img src={image.url} alt={`Image ${image.id}`} />
          </Link>
        </div> */}
      </div>

      <div className="Home-cardContainer">
        <div className="imageDiv smallImageDiv">
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>

        <div className="cardDiv">
          <h3>Images, that speak louder than words.</h3>
          {/* <p>Make 5 of these pages, (Same page, Same Route, different image and quote. A Carousel)</p> */}
        </div>
      </div>

      <div className="Home-cardContainer colum">
        <div className="cardDiv">
          <p className="PopularPara">Most Popular</p>
          <h4>Dive into a selection of popular visuals</h4>
        </div>

        <div className="imageContainer">
          <div className="imageOuterDiv">
            <div className="imageDiv withBTN">
              <Link className="imageLink">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="btnDiv">
              <Button
                buttonText={<span>&#x2665;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
              <Button
                buttonText={<span>&#x1F517;</span>}
                className="shareButton"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<span>&#x1F6D2;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>

          <div className="imageOuterDiv">
            <div className="imageDiv withBTN">
              <Link className="imageLink">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="btnDiv">
              <Button
                buttonText={<span>&#x2665;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
              <Button
                buttonText={<span>&#x1F517;</span>}
                className="shareButton"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<span>&#x1F6D2;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>

          <div className="imageOuterDiv">
            <div className="imageDiv withBTN">
              <Link className="imageLink">
                <img src="" alt="" />
              </Link>
            </div>
            <div className="btnDiv">
              <Button
                buttonText={<span>&#x2665;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
              <Button
                buttonText={<span>&#x1F517;</span>}
                className="shareButton"
                /* onClick={handleShare} */
              />
              <Button
                buttonText={<span>&#x1F6D2;</span>}
                className="BTN"
                /* onClick={handleSearch} */
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Home-cardContainer">
        <div>
          <p>The reasons</p>
          <h4>Why choose Us?</h4>
          <Link> video</Link>
        </div>
      </div>
      <div className="Home-cardContainer">
        <div>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
          <Link className="imageLink">
            <img src="" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
