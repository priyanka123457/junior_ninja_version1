import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Student = ({ courses1 }) => {
  console.log("Courses data:", courses1); // Add this for debugging

  return (
    <div className="container mt-5" style={{ marginTop: "50px", position: "relative", zIndex: 10 }}>
      <h1 className="text-center mb-4" style={{ color: "orange", fontSize: "2.5rem", fontWeight: "bold" }}>
        Student Dashboard
      </h1>
      <div className="row">
        {courses1 && courses1.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100" style={{ 
              backgroundColor: "#1a1a1a", 
              color: "white",
              border: "1px solid orange",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.courseName}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "orange" }}>{course.courseName}</h5>
                <p className="card-text">{course.description}</p>
                <div className="d-flex justify-content-between">
                  <Link 
                    to={`/course/${course.id}`} 
                    className="btn btn-primary"
                    style={{ backgroundColor: "orange", border: "none", color: "black" }}
                  >
                    View Details
                  </Link>
                  <button 
                    className="btn btn-success"
                    style={{ backgroundColor: "green", border: "none" }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
