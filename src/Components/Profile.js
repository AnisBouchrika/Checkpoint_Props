
import React from "react";




const profile = (props) =>{

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
        export default profile ;