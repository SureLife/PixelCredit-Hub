import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import "./UserProfile.css";

const backendURL = `http://localhost:5500`;

const UserProfile = () => {
  const { userName } = useParams();
  const { state, dispatch } = useContext(MyContext);
  const { user } = state;




 
  return (
    <div className="profile-container">
      <div className="profile">
        {user && (
          <div className="user-info">
            <h2>{`Welcome, ${user.name}!`}</h2>
            <p>Email: {user.email}</p>
          </div>
        )}

       {/*  <div className="upload-history">
          <h2>Upload History</h2>
          <div className="image-grid">
            {uploadHistory.map((upload) => (
              <div key={upload.id} className="image-item">
                <img
                  src={`path_to_your_image/${upload.fileName}`}
                  alt={upload.fileName}
                />
                <p>{upload.fileName}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="download-history">
          <h2>Download History</h2>
          <div className="image-grid">
            {downloadHistory.map((download) => (
              <div key={download.id} className="image-item">
                <img
                  src={`path_to_your_image/${download.fileName}`}
                  alt={download.fileName}
                />
                <p>{download.fileName}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;