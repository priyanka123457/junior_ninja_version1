import React from "react";

const Contact = () =>{


    return(<>
    <div>
          <h2 style={{textAlign:"center", backgroundColor:'black',color:'white'}}>Contact Us</h2>
    </div>
    <div
        style={{
          textAlign: 'center',
          border: '2px solid black', // Added border styling
          backgroundColor: "white",
          color: "black",
          fontSize: "16px", // Adjusted font size for readability
          fontFamily: "Arial, sans-serif", // Set a font family
          padding: "20px", // Increased padding for better spacing
           marginLeft: "120px",
          display: "inline-block",
          width: "80%" // Added width to control the content's width
        }}
      >
          <h3 style={{ fontSize: "24px" }}>Our Courses</h3> {/* Adjusted font size for the heading */}
        <p>We offer a variety of courses to help you become a better developer!</p>
        <ul style={{ textAlign: "center", listStyleType: "square" }}>
          <li>
            <strong>Web Development 101</strong>: Learn HTML, CSS, and JavaScript to build websites. (8 weeks)
          </li>
          <li>
            <strong>React for Beginners</strong>: Learn how to build interactive user interfaces with React. (10 weeks)
          </li>
          <li>
            <strong>JavaScript Fundamentals</strong>: Master the fundamentals of JavaScript programming. (12 weeks)
          </li>
        </ul>
        <p>For more information on any of these courses, feel free to contact us!</p>
        <p>Mobile Number:123456787</p>
      


      </div>



    
    </>)






}
export default Contact;