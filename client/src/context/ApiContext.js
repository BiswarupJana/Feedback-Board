import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [allFeedback, setAllFeedback] = useState("");

  const getAllFeedback = async () => {
    try {
      // Get the JWT token from local storage
      const token = localStorage.getItem("jwtToken");

      // Make the API request with the token in the headers
      const response = await fetch("{{URL}}api/v1/feedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      // Handle the response
      if (response.ok) {
        const responseData = await response.json();

        setAllFeedback(responseData.data);
      } else {
        console.error("Error fetching all Feedback:", response.statusText);
      }
    } catch (err) {
      console.error("Error fetching all Feedback:", err.message);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        allFeedback,
        getAllFeedback,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create a custom hook to use the context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
