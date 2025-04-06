import React from "react";
// import img from './img/banner_bg.png';  // Import your image
import Navvar from "./components/Navvar";
import Bodycontains from "./components/contains";
import Kids from "./components/kids";

function App() {
  const courses = [
    {
      image:
        "https://img.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg?t=st=1743876623~exp=1743880223~hmac=d8495c313d8fb29c970453b61b3e148fd04f6e935b290582832751fa9fad8b56&w=360",
      courseName: "Web Development 101",
      description: "Learn HTML, CSS, and JavaScript to build websites.",
    },
    {
      image:
        "https://assets.lulu.com/cover_thumbs/1/v/1vgq9jyj-front-shortedge-384.jpg",
      courseName: "React for Beginners",
      description: "Learn how to build interactive user interfaces with React.",
    },
    {
      image:
        "https://c8.alamy.com/comp/2D9N00E/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming-language-computer-courses-training-2D9N00E.jpg",
      courseName: "JavaScript Fundamentals",
      description: "Master the fundamentals of JavaScript programming.",
    }
  ];

  return (
    <>
      {/* Background div with image and color fallback */}
      <div
        style={{
          // backgroundImage: `url(${img})`,  // Set the imported image as the background
          // backgroundColor: 'rgba(44, 8, 8, 0.5)',  // Semi-transparent pink
          backgroundColor: "black",

          backgroundSize: "cover", // Ensure the image covers the entire div
          backgroundPosition: "center", // Center the image within the div
          // height: '100vh',  // Make the div fill the full height of the viewport
          color: "orange",
        }}
      >
        <Navvar />
        <Bodycontains />
        <div className="container mt-4">
          {/* Passing data (courses) to the Kids component */}
        <Kids courses={courses} />

        </div>
      </div>
    </>
  );
}

export default App;
