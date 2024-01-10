// Member.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const backendURL = `http://localhost:5500`;

function Member() {
  const { memberName } = useParams();
  const [memberDetails, setMemberDetails] = useState({});

  useEffect(() => {
    // Fetch the specific member's details based on the memberName
    async function fetchMemberDetails() {
      try {
        const response = await axios.get(`${backendURL}/${window.location.pathname}`);
        setMemberDetails(response.data);
      } catch (error) {
        console.error("Error fetching member details:", error);
      }
    }
  
    fetchMemberDetails();
  }, []);
  

  return (
    <div>
      <h1>Member Details for .......work later to make code working{memberDetails.name}</h1>
      <p>Name: {memberDetails.name}</p>
      <p>Lastname: {memberDetails.lastname}</p>
      <p>Role: {memberDetails.role}</p>
      {/* Add other member details as needed */}
    </div>
  );
}

export default Member;
