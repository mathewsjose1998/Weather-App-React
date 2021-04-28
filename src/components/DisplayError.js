import React from "react";
import "./DisplayError.css";
function DisplayError() {
  return (
    <div className="error-container">
      <div className="error-message">
        <i class="fas fa-frown-open"></i>
        <p>Sorry, The Specified place is not found</p>
      </div>
    </div>
  );
}

export default DisplayError;
