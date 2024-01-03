import React from 'react'
import "./categoryStyle.css"

function Categories() {
  return (
    <div>
      {/* Spotlight Section */}
      <div className="Spotlight">
        <div className="leftSpot">
          <h1>"Embracing life's beauty, one snapshot at a time."</h1>
          <p className="mainP">It urges us to view life as a series of moments to be savored, much like taking snapshots to capture the essence of beauty around us. Each "snapshot" metaphorically represents a conscious effort to pause, observe, and appreciate the wonders that often escape our notice in the rush of daily life.</p>
          <p className="finalP"><strong>Explore Picture Wonderland</strong></p>
        </div>
      </div>
      {/* Categories */}
      <h2 className="cats">Categories</h2>
      <div className="Categories">
        <div className="singleCat">
          <h3>3D Images</h3>
        </div>
        <div className="singleCat">
          <h3>Animals | Wildlife</h3>
        </div>
        <div className="singleCat">
          <h3>Beauty | Fashion</h3>
        </div>
        <div className="singleCat">
          <h3>Celebrities</h3>
        </div>
        <div className="singleCat">
          <h3>Education</h3>
        </div>
        <div className="singleCat">
          <h3>Food and drink</h3>
        </div>
        <div className="singleCat">
          <h3>Interiors</h3>
        </div>
        <div className="singleCat">
          <h3>Seasons</h3>
        </div>
        <div className="singleCat">
          <h3>Technology</h3>
        </div>
      </div>
    </div>
  )
}

export default Categories