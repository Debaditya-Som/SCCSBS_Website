import React from 'react'
import '../styles/about.css'
const about = () => {
  return (
    <div className="about">
        <div className="left">
        <img src={require('../assets/logo.jpg')} alt="" />
        <img src={require('../assets/team.png')} alt="" />
        <img src={require('../src/assets/mj1.jpg')} alt="" />
        <img src={require('../assets/Team.jpeg')} alt="" />
        </div>
        <div className="right">
        <span></span>
        <div>
          <span className="stroke-test">About</span>
          <span className="us">Us</span>
        </div>
        <div className="details">
          <ul>
            <li>
              <div className="tick">
                <img src={require('../assets/tick.png')} alt="" />
                <span>Engineers leading technological advancement.</span>
              </div>
            </li>
            <li>
              <div className="tick">
                <img src={require('../assets/tick.png')} alt="" />
                <span>Skills and creativity for global issues.</span>
              </div>
            </li>
            <li>
              <div className="tick">
                <img src={require('../assets/tick.png')} alt="" />
                <span>Innovation drives progress.</span>
              </div>
            </li>
            <li>
              <div className="tick">
                <img src={require('../assets/tick.png')} alt="" />
                <span>Fostering a culture of innovation.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;