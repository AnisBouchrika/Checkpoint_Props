import PropTypes from "prop-types";
import React from "react";

const Profile = (props) =>{

        return (
        <div>
      
                <button onClick={props.alert}>Click me</button>
                <h1> Full name :{props.fullName}     </h1>
                <h1> Bio :      {props.bio}          </h1>
                <h1> Profession :{props.profession}   </h1>
                
                {props.children}
                
        </div>
        
        )
}

Profile.propTypes = {
        fullName : PropTypes.string,
        bio  : PropTypes.string,
        profession  : PropTypes.string
} 

export default Profile ;

     
        