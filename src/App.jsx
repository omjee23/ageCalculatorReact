import { useState } from "react";
import "./app.css";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({ year: 0, months: 0, days: 0 });
  const calculateAge = () => {
    if (!dob) return alert("Please select your date of birth");
    const today = new Date();
    const birthDate = new Date(dob);
    if (today < birthDate) return alert("Birth date cannot be in the future");
    let year = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDay() - birthDate.getDay();

    if (year < 0 || (months === 0 && days < 0)) {
      year--;
      months += 12;
    }

    if (days < 0) {
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }

    setAge({ year, months, days });
  };
  return (
    <>
      <div className="main-container">
        <div className="calculatorDiv">
          <h2>Age Calculator</h2>
          <div className="inputDiv">
            <label htmlFor="dob">Enter Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button onClick={calculateAge}>Calculate Age</button>
          <div className="resultDiv">
            <h3>Your Age is:</h3>
            <div className="ageBoxDiv">
              <div className="age-box">
                <span id="years">{age?.year || "-"}</span>
                <p>Years</p>
              </div>
              <div className="age-box">
                <span id="months">{age?.months || "-"}</span>
                <p>Months</p>
              </div>
              <div className="age-box">
                <span id="days">{age?.days || "-"}</span>
                <p>Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
