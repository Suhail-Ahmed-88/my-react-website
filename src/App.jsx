import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    setMessage("Hello! Welcome to my React website.");
  };

  return (
    <div className="app">

      {/* Navigation */}
      <header>
        <nav className="navbar">
          <h1>My Website</h1>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Welcome to My React Website</h2>

        <p>
          This website is built using React.js and Vite.
        </p>

        <button onClick={showMessage}>
          Click Me
        </button>

        {message && <p className="message">{message}</p>}
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>

        <p>
          We are learning React.js by building a simple
          modern web application with Vite.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Name: Suhail Ahmed Sindhi</p>
        <p>Email: suhailahmedsindhi@gmail.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 My React Website</p>
      </footer>

    </div>
  );
}

export default App;