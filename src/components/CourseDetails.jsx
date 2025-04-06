import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  // Find the course from the courses array
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          Course not found
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/')}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <button 
        className="btn btn-secondary mb-3" 
        onClick={() => navigate('/')}
      >
        Back to Courses
      </button>
      <div className="card">
        <img 
          src={course.image} 
          className="card-img-top" 
          alt={course.courseName}
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h2 className="card-title">{course.courseName}</h2>
          <p className="card-text">{course.description}</p>
          
          <div className="mt-4">
            <h4>Course Details</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Duration:</strong> {course.duration}
              </li>
              <li className="list-group-item">
                <strong>Level:</strong> {course.level}
              </li>
              <li className="list-group-item">
                <strong>Instructor:</strong> {course.instructor}
              </li>
            </ul>
          </div>

          {course.modules && (
            <div className="mt-4">
              <h4>Course Modules</h4>
              <div className="list-group">
                {course.modules.map((module, index) => (
                  <div key={index} className="list-group-item">
                    <h5 className="mb-1">{module.title}</h5>
                    <p className="mb-1">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; 