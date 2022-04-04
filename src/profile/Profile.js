import React from 'react'
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Profile(props) {
  const {fullName,bio,profession,handleName,children} =props
  return (
  <div>
  <h1 style = {{color: "white",textAlign:"center", backgroundColor: "DodgerBlue",padding: "10px",fontFamily: "Arial"}} >{fullName}</h1>
  <h2 style={{color: "Black", textAlign:"center"}}>{bio}</h2>
  <h3 style={{color: "Black", textAlign:"center"}}>{profession}</h3>
  {children}
  <center>
  <Button variant="primary" style={{marginTop: "10px"}} onClick={()=>handleName(fullName)} >Click Me</Button>
  </center>
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
 