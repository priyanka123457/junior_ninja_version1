import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";

// const Card = ({ image, courseName, description }) => {
//   return (

//     <div className="col-md-4 mb-4">
//       <div className="card">
//         <img
//           style={{ height: "400px", width: "auto" }}
//           src={image}
//           className="card-img-top"
//           alt='img'
//         />
//         <div className="card-body">
//           <h5 className="card-title">{courseName}</h5>
//           <p className="card-text">{description}</p>
//           <a href="#" className="btn btn-primary">
//             Enroll Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const Kids = ({ courses }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>College Student Courses</h1>
      <div className="row">
        {courses.map((course, index) => (
          <Card
            key={index}
            image={course.image}
            courseName={course.courseName}
            description={course.description}
          />
        ))}
      </div>
    </>
  );
};

export default Kids;
