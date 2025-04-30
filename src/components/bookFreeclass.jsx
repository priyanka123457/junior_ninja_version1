import React from 'react';
import './css/bookclass.css'; // Optional: for styling
import { useNavigate } from 'react-router-dom';

function Bookclass() {
  // Handle form submission
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form element values directly from the DOM
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.preferredDate.value,
      message: form.message.value,
    };
    

    // Send POST request using fetch
    fetch('https://script.google.com/macros/s/AKfycby_ljPRGoijhFf_X5aLoy-BHctT4AAy09sBHRyaMvVmsk5AqmQc6SLqp1jrBj2YhMY/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(), // Use URLSearchParams for form-like encoding
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('your data is submited succesfully')
        navigate('/')

           
        //
        // Optionally, handle successful submission (e.g., show a success message)
      })
      .catch((error) => {
        console.log('Error',error)

        // Optionally, handle error (e.g., show an error message)
      });
  };

  return (
    <div className="book-class-container">
      <h1>Book a Free Class</h1>
      <p id="special-text">Fill in the form below to book your free class with us!</p>


      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name" // Name attribute helps to access input value in form
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email" // Name attribute helps to access input value in form
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone" // Name attribute helps to access input value in form
            placeholder="Enter your phone number"
            required
          />
        </label>

        <label>
          Preferred Date:
          <input
            type="date"
            name="preferredDate" // Name attribute helps to access input value in form
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message" // Name attribute helps to access input value in form
            placeholder="Tell us what you're looking for..."
            rows="4"
          ></textarea>
        </label>

        <button type="submit">Book Now</button>
      </form>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@yourwebsite.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> 123, Learning Street, New Delhi, India</p>
      </div>
    </div>
  );
}

export default Bookclass;
