import React from "react"

function Profile()  {
    return(
    <div className="profile">
        <h1>Isaac Voehringer</h1>
        <h2>Full-stack React Engineer & Science Teacher</h2>
        <img src="/images/myface.jpeg" height={200}  />
        <img src="/images/pups.jpg" height={200} alt="mypups"/> 
        <br></br> 
        <a href="./src/components/BiologyClass"
            target='_blank'
            rel = 'noopner noreferrer' >
            <button className="btn btn-warning">personal life</button> </a> 
        </div>
)}

export default Profile