import { useState } from "react";
// import axiosClient from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import ifet_logo from "../assets/IFET Logo.png";
import AICC_logo from "../assets/AICC-logos_transparent-removebg-preview.png";
const Home = () => {
  const [regNumber, setRegNumber] = useState(""); 
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http:/localhost/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regNumber })
      });

      const data = await response.json(); // e.g., { name: "John", status: "In" }

      // Navigate to status page with data
      navigate("/status", { state: { name: data.name, status: data.status } });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <main>
        <section>
          <div className="section1">
            <h1>Department of Artificial intelligence and Machine learning</h1>
            <h2>Machine Learning Laboratory</h2>
            <figure>
              <img src={ifet_logo} alt="IFET logo" height="200px" />
              <img src={AICC_logo} alt="AICC logo" height="200px" />
              
            </figure>
          </div>
        </section>
        <section className="reg">
          <form onSubmit={handleSubmit}>
            <h1>Enter your Register number</h1>
            <input
              type="text"
              value={regNumber}
              minLength={12}
              onChange={(e) => setRegNumber(e.target.value)}
            />
            <input type="submit" />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Home;
