import React from 'react'
import PropTypes from "prop-types";
function Profile(props) {
  const {fullName,bio,profession,handleName,children} =props
  return (
  <div>
  <h1 style={{color: "red", textAlign:"center"}}> {fullName}</h1>
  <h2 style={{color: "Black", textAlign:"center"}}>{bio}</h2>
  <h3 style={{color: "Black", textAlign:"center"}}>{profession}</h3>
  {children}
  <button onClick={()=>handleName(fullName)} >Button</button>
  </div>
  );

  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };

  Profile.defaultProps={
    fullName: "Name",
    bio: "Bio",
    profession:"Profession",

  };
}
  export default Profile;
 