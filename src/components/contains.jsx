import React from "react";
import './css/container.css';  

const Bodycontains = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="text-container">
            <h1 >WE BRING CODING AND CREATIVITY TOGETHER</h1>
            <hr />
            <h2>Change the world by learning</h2>
            <h3>Think About Code</h3>
            <p>
              Computer science helps children with communication, creativity, math, problem solving, and prepares them for skills needed in the world.
            </p>
            <div className="buttons-container" style={{marginBottom:'10px'}}>
              <button style={{backgroundColor:'pink', padding: '10px 20px' ,borderRadius: '5px', marginRight: '10px'}} className="btn">Explore Courses</button>
              <button style={{backgroundColor:'pink',padding:'10px 20px',borderRadius:'5px',}} className="btn">Book a Free Class</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-container">
            <img
              src="https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_960_720.png"
              alt="Coding and Creativity"
              className="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bodycontains;
