import { Routes, Route } from "react-router-dom";
import Navvar from "./components/Navvar";
import Bodycontains from "./components/contains";
import Kids from "./components/kids";
import CourseDetails from "./components/CourseDetails";
import Student from "./components/student";
import Contact from "./components/contact";
import VideoComponent from "./components/vedio";
import Bookclass from "./components/bookFreeclass";

function App() {
  const courses = [
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg?t=st=1743876623~exp=1743880223~hmac=d8495c313d8fb29c970453b61b3e148fd04f6e935b290582832751fa9fad8b56&w=360",
      courseName: "Web Development 101",
      description: "Learn HTML, CSS, and JavaScript to build websites.",
      duration: "8 weeks",
      level: "Beginner",
      instructor: "John Doe",
      modules: [
        {
          title: "HTML Basics",
          description: "Learn the fundamentals of HTML"
        },
        {
          title: "CSS Styling",
          description: "Master CSS for beautiful web design"
        }
      ]
    },

    {
      id: 2,
      image: "https://assets.lulu.com/cover_thumbs/1/v/1vgq9jyj-front-shortedge-384.jpg",
      courseName: "React for Beginners",
      description: "Learn how to build interactive user interfaces with React.",
      duration: "10 weeks",
      level: "Intermediate",
      instructor: "Jane Smith",
      modules: [
        {
          title: "React Components",
          description: "Understanding React components and props"
        },
        {
          title: "State Management",
          description: "Learn about React state and hooks"
        }
      ]
    },
    {
      id: 3,
      image: "https://c8.alamy.com/comp/2D9N00E/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming-language-computer-courses-training-2D9N00E.jpg",
      courseName: "JavaScript Fundamentals",
      description: "Master the fundamentals of JavaScript programming.",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "Mike Johnson",
      modules: [
        {
          title: "JavaScript Basics",
          description: "Core JavaScript concepts and syntax"
        },
        {
          title: "DOM Manipulation",
          description: "Working with the Document Object Model"
        }
      ]
    }
  ];

  const courses1 = [
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/computer-programming-camp-abstract-concept-illustration_335657-3921.jpg?t=st=1743876623~exp=1743880223~hmac=d8495c313d8fb29c970453b61b3e148fd04f6e935b290582832751fa9fad8b56&w=360",
      courseName: "Web Development 101",
      description: "Learn HTML, CSS, and JavaScript to build websites.",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "John Doe",
      modules: [
        {
          title: "HTML Basics",
          description: "Learn the fundamentals of HTML"
        },
        {
          title: "CSS Styling",
          description: "Master CSS for beautiful web design"
        }
      ]
    },

    {
      id: 2,
      image: "https://assets.lulu.com/cover_thumbs/1/v/1vgq9jyj-front-shortedge-384.jpg",
      courseName: "React for Beginners",
      description: "Learn how to build interactive user interfaces with React.",
      duration: "12weeks",
      level: "Intermediate",
      instructor: "Jane Smith",
      modules: [
        {
          title: "React Components",
          description: "Understanding React components and props"
        },
        {
          title: "State Management",
          description: "Learn about React state and hooks"
        }
      ]
    },
    {
      id: 3,
      image: "https://c8.alamy.com/comp/2D9N00E/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming-language-computer-courses-training-2D9N00E.jpg",
      courseName: "JavaScript Fundamentals",
      description: "Master the fundamentals of JavaScript programming.",
      duration: "12 weeks",
      level: "Beginner",
      instructor: "Mike Johnson",
      modules: [
        {
          title: "JavaScript Basics",
          description: "Core JavaScript concepts and syntax"
        },
        {
          title: "DOM Manipulation",
          description: "Working with the Document Object Model"
        }
      ]
    }
  ];


  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "orange",
      }}
    >
      <Navvar />
      
      

      

      <div style={{ padding: "50px 0", position: "relative", zIndex: 5 }}>
        <Routes>
        <Route path="/" element={
            <div>
              <Bodycontains />
              {/* <Kids courses={courses} /> */}
              {/* <Student courses1={courses1} /> Add Student here */}
              < Contact />
              < VideoComponent/> Add Student here
            </div>
          } />
          
          <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />
          <Route path="/student" element={<div><Student courses1={courses1} />
          <Kids courses={courses} />
           </div>}/>

          <Route path="/contact" element={<Contact/>}/>
          <Route path="/bookFreeclass" element={<Bookclass/>} />

        </Routes>
        

      </div>
    
    </div>
  );
}

export default App;
