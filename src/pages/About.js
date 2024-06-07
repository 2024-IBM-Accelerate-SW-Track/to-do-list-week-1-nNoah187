import React, { Component } from 'react';
import "./About.css";
import image from "../assets/image.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
 <div className="split left">
 <div className="centered">
 <img 
 className="profile_image"
 src={image}
 alt="Profile Pic"
 ></img>
 </div>
 </div>
 <div className="split right">
 <div className="centered">
 <div className="name_title">Noah Gibson</div>
 <div className="brief_description">
  I work and Target and am developing a website for a startup in Oklahoma City in my free time. I really like Chipotle.
 </div>
 </div>
 </div>
 </div>  
      </div>
    )
  }
}