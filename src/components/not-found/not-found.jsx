import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <p style={{fontSize: `150px`, fontWeight: `700`}}>
      <span style={{color: `red`}}>
        404:
      </span>
      <span style={{color: `green`}}>
        すみません兄！
      </span>
      <Link to="/" style={{color: `blue`}}> Back to Main Page</Link>
    </p>
  );
};

export default NotFound;
