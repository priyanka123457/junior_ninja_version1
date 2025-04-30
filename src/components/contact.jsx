import React from "react";

const Contact = () =>{


    return(<>
    <div style={{textAlign:'center'}}>
    </div>
   
    <div
        style={{
          textAlign: 'center',
          border: '2px solid black', // Added border styling
          backgroundColor:'black',
          color: "white",
          fontSize: "25px", // Adjusted font size for readability
          fontFamily: "Arial, sans-serif", // Set a font family
          padding: "20px", // Increased padding for better spacing
          marginLeft: "120px",
          display: "inline-block",
          width: "80%", // Added width to control the content's width
          height:"100%"
          
        }}
      >
          <h3 style={{ fontSize: "24px" }}>Our Courses</h3> {/* Adjusted font size for the heading */}
        <h>We offer a variety of courses to help you become a better developer!</h>
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
        <h>For more information on any of these courses, feel free to contact us!</h>
        <h>Mobile Number:123456787</h>
      


      </div>
      <div className="text-center">
  <button className="btn btn-link p-0">
    <img
      src="https://img.freepik.com/premium-photo/customer-support-hotline-contact-us-people-connection-businessman-using-computer-keyboard-with-email-call-phone-address-chat-message-icons_265022-17617.jpg"
      alt="Contact Us"
      className="img-fluid" 
      style={{ width: "800px", height: "400px", marginTop:'12px'}}  // You can adjust the size here
    />
  </button>
  <div className="social-icons" style={{ marginTop: "20px" }}>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      alt="Facebook"
      style={{ width: "40px", height: "40px", marginRight: "15px" }}
    />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      alt="Instagram"
      style={{ width: "40px", height: "40px", marginRight: "15px" }}
    />
  </a>
  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
    <img
      src="https://icon-library.com/images/whatsapp-png-icon/whatsapp-png-icon-13.jpg"
      alt="WhatsApp"
      style={{ width: "40px", height: "40px" }}
    />
  </a>
</div>

</div>




    
    </>)






}
export default Contact;