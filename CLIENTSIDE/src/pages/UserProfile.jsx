import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css"; // Import your CSS module
import { MyContext } from "../context/MyContext";
//const backendURL = `http://localhost:${PORT}`;...check THIS ONE WHY IT IS NOT WORKING!!
const backendURL = `http://localhost:5500`;

const UserProfile = () => {
  const { userId } = useParams();
  const { state, dispatch } = useContext(MyContext);
  const { user, uploadHistory, downloadHistory } = state;

 /*  useEffect(() => {
    // Fetch user data using userId (you might have an API endpoint for this)

    fetch(`${backendURL}/users/${userId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_USER", payload: data }))

      .catch((error) => console.error("Error fetching user:", error));

    // Fetch upload history for the user
    fetch(`${backendURL}/users/${userId}/uploads`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_UPLOAD_HISTORY", payload: data }))
      .catch((error) => console.error("Error fetching upload history:", error));

    // Fetch download history for the user

    fetch(`${backendURL}/users/${userId}/downloads`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DOWNLOAD_HISTORY", payload: data }))
      .catch((error) =>
        console.error("Error fetching download history:", error)
      );
  }, [username, dispatch]);
 */
  return (
    <div>test... this will works once user is looged in</div>
   /*  <div className="profile-container">
      <div className="profile">
        {user && (
          <div className="user-info">
            <h2>Welcome, {user.username}!</h2>
            <p>Email: {user.email}</p>
          </div>
        )}

        <div className="upload-history">
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
        </div>

        <div className="download-history">
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
        </div>
      </div>
    </div> */
  );
};

export default UserProfile;
